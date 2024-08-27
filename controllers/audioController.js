const { Track, Album, Artist, UserTrack } = require('../models/models');
const jwt = require('jsonwebtoken')

class AudioController {
    async getAll(req, res) {
        const token = req.headers['authorization'];
        let userId;
        if(token) {
            try {
                const user = jwt.verify(token, process.env.SECRET_KEY);
                userId = user.id
            } catch(err) {
                res.json({ message: err })
            }
        }
        try {
            return res.json(await Track.findAll({ 
                include: [Album, Artist, {model: UserTrack, where: {userId}, required: false},],
            }));
        } catch (err) {
            return res.json({ message: err });
        }
    }
};

module.exports = new AudioController();