const { Album, Track, Artist } = require('../models/models');

class ArtistController {
    async getAll(req, res) {
        try {
            return res.json(await Artist.findAll({ include: [Track, Album] }));
        } catch (err) {
            return res.json({ message: err });
        }
    }
};

module.exports = new ArtistController();