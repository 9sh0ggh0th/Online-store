const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')
const generateJwt = (id, mail, role) => {
    return jwt.sign(
        {id, mail, role},
        process.env.JWT_SECRET_KEY,
        {expiresIn: '24hr'}
    )
}

class UserController {
    async registration(req, res, next) {
        try {
            const {mail, password, role} = req.body
            if(!mail || !password) {
                return next(ApiError.badRequest('Invalid email or password'))
            }
            const candidate = await User.findOne({where: {mail}})
            if(candidate){
                return next(ApiError.badRequest('User with this email already exists'))
            }
            const hashPassword = await bcrypt.hash(password, 5)
            const user = await User.create({password: hashPassword, role, mail})
            const basket = await Basket.create({userId: user.id})
            const token = generateJwt(user.id, user.mail, user.role)
            return res.json({token})
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }


    async login(req, res, next) {
        const {mail, password} = req.body
        const user = await User.findOne({where: {mail}})
        if(!user) {
            return next(ApiError.internal('User with this name is not found'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword){
            return next(ApiError.internal('Invalid password'))
        }
        const token = generateJwt(user.id, user.mail, user.role)
        return res.json({token})
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.mail, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()