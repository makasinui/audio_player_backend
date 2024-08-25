const { Album, Track, Artist } = require('../models/models');

class ArtistController {
    async getAll(req, res) {
        try {
            return res.json(await Artist.findAll({ include: [Track, Album] }));
        } catch (err) {
            return res.json({ message: err });
        }
    }
    async getOne(req, res) {
        const { id } = req.params;
        try {
            return res.json(await Artist.findOne({ 
                include: [Track, {model: Album, include: [Track, Artist]}], 
                where: { id } 
            }));
        } catch (err) {
            return res.json({ message: err })
        }
    }
};

module.exports = new ArtistController();