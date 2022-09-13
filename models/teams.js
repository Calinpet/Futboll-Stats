// //Schema for Teams
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: String,
  rank: Number,
  league: String,
  players:[]
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;