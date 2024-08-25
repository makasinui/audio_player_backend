const Router = require('express');
const router = new Router();
const ArtistController = require('../controllers/artistController');

router.get('/', ArtistController.getAll);
router.get('/:id', ArtistController.getOne);

module.exports = router;