const Router = require('express')
const router = new Router();
const deviceRoute = require('./deviceRoute')
const typeRoute = require('./typeRoute')
const brandRoute = require('./brandRoute')
const userRoute = require('./userRoute')

router.use('/user', userRoute)
router.use('/brand', brandRoute)
router.use('/type', typeRoute)
router.use('/device', deviceRoute)


module.exports = router;