const Router = require('express')
const router = new Router();
const typeController = require('../controllers/typeController.js')
const checkRole = require('../middleware/checkRoleMiddleware.js')

router.post('/', checkRole('ADMIN'), typeController.create)
router.delete('/', checkRole('ADMIN'), typeController.delete)
router.get('/', typeController.getAll)



module.exports = router;