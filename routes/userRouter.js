const Router = require('express');
const router = new Router();
const UserController = require('../controllers/userController');

router.post('/auth', UserController.login)
router.post('/register', UserController.register);

module.exports = router;