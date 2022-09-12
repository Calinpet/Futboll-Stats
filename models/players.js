// //Schema for Players
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  name: String,
  rank: Number,
  players:[]
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;