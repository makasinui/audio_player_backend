const { Track, Album, Artist } = require('../models/models');

class AudioController {
    async getAll(req, res) {
        try {
            return res.json(await Track.findAll({ include: [Album, Artist] }));
        } catch (err) {
            return res.json({ message: err });
        }
    }
};

module.exports = new AudioController();