var mongoose = require('mongoose')
  ,Schema = mongoose.Schema
  ,ObjectId = Schema.ObjectId;

var playerSchema = new Schema({
  name: String,
  gamesPlayed: Number,
  goals: Number,
  assists: Number, 
  points: Number, 
  primaryAssists: Number,
  secondaryAssists: Number,
  primaryPoints: Number,
  atoiPer60: Number,
  shots: Number, 
  missedShots: Number,
  blockedShotsFor: Number,
  corsiFor: Number, 
  fenwickFor: Number,
  faceoffsWon: Number,
  faceoffsLost: Number,
  faceoffPercentage: Number,
  penaltiesTaken: Number,
  penaltiesDrawn: Number, 
  penaltyPlusMinus: Number, 
  shotsAgainstBlocked: Number,
  hitsFor: Number, 
  hitsAgainst: Number,
  hitsPlusMinus: Number
});

module.exports = mongoose.model('Player', playerSchema);
