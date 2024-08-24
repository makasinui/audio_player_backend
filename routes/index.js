const Router = require('express');
const router = new Router();
const UserRouter = require('./userRouter');
const AudioRouter = require('./audioRouter');

router.use('/user', UserRouter);
router.use('/audio', AudioRouter)

module.exports = router;