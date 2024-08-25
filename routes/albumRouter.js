const Router = require('express');
const router = new Router();
const AlbumController = require('../controllers/albumController');

router.get('/', AlbumController.getAll);

module.exports = router;