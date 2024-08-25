const Router = require('express');
const router = new Router();
const ArtistController = require('../controllers/artistController');

router.get('/', ArtistController.getAll);

module.exports = router;