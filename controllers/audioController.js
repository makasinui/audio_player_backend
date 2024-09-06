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
            try {
                return res.json(await Track.findAll({ 
                    include: [Album, Artist, {model: UserTrack, where: {userId}, required: false},],
                }));
            } catch (err) {
                return res.status(404).json({ message: err });
            }
        } else {
            return res.json(await Track.findAll({include: [Album, Artist]}))
        }
    }

    async makeFavourite(req, res) {
        const token = req.headers['authorization'];
        let userId;
        
        const { trackId, favourite } = req.body;
        
        if(token) {
            try {
                const user = jwt.verify(token, process.env.SECRET_KEY);
                userId = user.id
                if(favourite) {
                    const user = await UserTrack.create({ userId, trackId })
                    return res.json(user);
                } else {
                    const favouriteTrack = await UserTrack.findOne({where: { userId, trackId }});
                    
                    return res.json(await favouriteTrack.destroy());
                }
            } 
            catch (err) {
                return res.json({ message: err });
            }

        } else {
            return res.status(401).json({ message: 'Unauthorized' });
        }
    }
};

module.exports = new AudioController();