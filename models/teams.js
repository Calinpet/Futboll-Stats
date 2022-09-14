// //Schema for Team
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: String,
  image: String,
  league: String,
  founded: Number,
  coach: String,
  championships: Number, 
  wins: Number,
  losses: Number
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;