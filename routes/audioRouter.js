const Router = require('express');
const router = new Router();
const AudioController = require('../controllers/audioController');

router.get('/', AudioController.getAll);

module.exports = router;