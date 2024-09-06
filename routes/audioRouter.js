const Router = require('express');
const router = new Router();
const AudioController = require('../controllers/audioController');

router.get('/', AudioController.getAll);
router.post('/favourite', AudioController.makeFavourite);

module.exports = router;