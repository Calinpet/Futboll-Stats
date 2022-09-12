// //Schema for Players
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  name: String 
}, {
  timestamps: true
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;