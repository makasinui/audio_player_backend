const Router = require('express')
const router = new Router()
const UserRouter = require('./userRouter')

router.use('/user', UserRouter);

module.exports = router;