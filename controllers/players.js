const express =require ('express');
const router = express.Router();
const Player = require('../models/players.js');


//INDEX

router.get('/', (req,res)=>{
  Player.find({}, (err, foundPlayers)=>{
    res.render('players/index.ejs', {
      players: foundPlayers
    })
  })
})

//NEW

//DELETE

//UPDATE

//CREATE

router.post('/', (req,res)=>{
  Player.create(req.body,(err, createPlayer)=>{
    res.redirect('/players')
  })
})

//EDIT

//SHOW

router.get('/:id', (req, res) => {
  Author.findById(req.params.id, (err, foundPlayer) => {
      res.render('players/show.ejs', {
        author: foundPlayer
    });
  });
});