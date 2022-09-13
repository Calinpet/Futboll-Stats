const express =require ('express');
const router = express.Router();
const Team = require('../models/teams.js');


//INDEX

router.get('/', (req,res)=>{
  Team.find({}, (err, foundTeams)=>{
    res.render('teams/index.ejs', {
      teams: foundTeams
    })
  })
})

//NEW

router.get('/new', (req, res)=>{
  res.render('teams/new.ejs')
})

//DELETE
router.delete('/:id', (req, res)=>{
  Team.findByIdAndRemove(req.params.id, ()=>{
      res.redirect('/teams');
  });
});

//UPDATE

router.put('/:id', (req, res)=>{
  Team.findByIdAndUpdate(req.params.id, req.body, ()=>{
    res.redirect('/teams')
  });
});

//CREATE

router.post('/', (req,res)=>{
  Team.create(req.body,(err, createTeam)=>{
    res.redirect('/teams')
  });
});

//EDIT
// define the edit controller
router.get('/:id/edit', (req, res)=>{
  Team.findById(req.params.id, (err, foundTeam)=>{
    res.render('teams/edit.ejs', {
      team: foundTeam
    });
  });
});

//SHOW
 
router.get('/:id', (req, res) => {
  Team.findById(req.params.id, (err, foundTeam) => {
      res.render('teams/show.ejs', {
        team: foundTeam
    });
  });
});

module.exports = router;