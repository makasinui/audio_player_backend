const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.ENUM("user", "admin"), defaultValue: "user" },

});

const Artist = sequelize.define("artist", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
});

const Album = sequelize.define('album', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: { type: DataTypes.STRING, allowNull: false },
    img: { type: DataTypes.STRING, allowNull: false }
})

const Track = sequelize.define("track", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    url: { type: DataTypes.STRING, allowNull: false },
});

const UserTrack = sequelize.define("user_track", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})


Artist.hasMany(Track);
Album.hasMany(Track);
Track.belongsTo(Artist);
Track.belongsTo(Album);

Album.belongsTo(Artist);

Track.hasMany(UserTrack);
User.hasMany(UserTrack);
UserTrack.belongsTo(Track);
UserTrack.belongsTo(User);

module.exports = {
    User,
    Artist,
    Album,
    Track,
    UserTrack
};
