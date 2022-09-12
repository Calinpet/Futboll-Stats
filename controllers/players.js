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
router.get('/new', (req, res)=>{
  res.render('players/new.ejs')
})

//DELETE
router.delete('/:id', (req, res)=>{
  Player.findByIdAndRemove(req.params.id, ()=>{
      res.redirect('/players');
  });
});

//UPDATE

//CREATE

router.post('/', (req,res)=>{
  Player.create(req.body,(err, createPlayer)=>{
    res.redirect('/players')
  })
})

//EDIT
// define the edit controller
router.get('/:id/edit', (req, res)=>{
  Player.findById(req.params.id, (err, foundPlayer)=>{
    res.render('players/edit.ejs', {
      player: foundPlayer
    })
  })
})

//SHOW

router.get('/:id', (req, res) => {
  Player.findById(req.params.id, (err, foundPlayer) => {
      res.render('players/show.ejs', {
        author: foundPlayer
    });
  });
});