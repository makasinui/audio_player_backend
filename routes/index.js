const Router = require('express');
const router = new Router();
const UserRouter = require('./userRouter');
const AudioRouter = require('./audioRouter');
const AlbumRouter = require('./albumRouter');
const ArtistRouter = require('./artistRouter');

router.use('/user', UserRouter);
router.use('/audio', AudioRouter);
router.use('/album', AlbumRouter);
router.use('/artist', ArtistRouter)

module.exports = router;