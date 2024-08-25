const Router = require('express');
const router = new Router();
const UserRouter = require('./userRouter');
const AudioRouter = require('./audioRouter');
const AlbumRouter = require('./albumRouter');

router.use('/user', UserRouter);
router.use('/audio', AudioRouter);
router.use('/album', AlbumRouter)

module.exports = router;