const {Type} = require('../models/models.js')

class TypeController {
    async create(req, res) {
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }

    async delete(req, res) {
        const {name} = req.body
        const delType = await Type.destroy({where: {name}})
        return res.json({message: 'Deleted'})
    }

    async getAll(req, res) {
        const types = await Type.findAll()
        return res.json(types)
    }
}

module.exports = new TypeController()