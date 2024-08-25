const { Album, Track, Artist } = require('../models/models');

class AlbumController {
    async getAll(req, res) {
        try {
            return res.json(await Album.findAll({ include: [Track, Artist] }));
        } catch (err) {
            return res.json({ message: err });
        }
    }
};

module.exports = new AlbumController();