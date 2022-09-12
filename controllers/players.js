const express =require ('express');
const router = express.Router();
const Player = require('../models/players.js');


//INDEX

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