// Page Controller: Angela
const express = require('express'),
  MentorRouter = express.Router(),
  Mentor = require('.././models/mentor');

// GET ALL MENTORS ////////////////////////////////////////////////////

MentorRouter.get('/', (req, res) => {
  Mentor.find().then((mentors) => {
    res.json(mentors);
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message: 'You caught an error'});
  });
});

// GET ONE MENTOR ////////////////////////////////////////////////////

MentorRouter.get('/:id', (req, res) => {
  const {id} = req.params;
  Mentor.findOneMentor(id).then((mentor) => {
    res.json(mentor);
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message: 'You caught an error with the GET method'});
  });
});

// UPDATE MENTOR ACTIVE STATUS ////////////////////////////////////////////////////

MentorRouter.put('/changestatus/:id', (req, res) => {
  const {id} = req.params;

  Mentor.findOneMentor(id).then((mentor) => {
    const active = !mentor.active;
    Mentor.changeStatusOneMentor(id, active).then((mentorReturn) => {
      res.send(mentorReturn)
    }).catch((error) => {
      console.log(error);
      res.status(500).json({message: 'You caught an error internal'});
    })
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message: 'You caught an error with the PUT method'});
  });
});

// DESTROY ONE MENTOR ////////////////////////////////////////////////////
MentorRouter.delete('/:id', (req, res) => {
  const {id} = req.params;
  Mentor.destroyOneMentor(id).then((mentor) => {
    res.json(mentor);
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message: 'You caught an error with the DELETE METHOD'});
  });
});

// CREATE ONE MENTOR ////////////////////////////////////////////////////
MentorRouter.post('/', (req, res) => {
  Mentor.createOneMentor(req.body).then((mentor) => {
    res.json(mentor);
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message: 'You caught an error with the CREATE route'});
  });
});

// GET A ROSIE'S MENTOR(S) ////////////////////////////////////////////////////
MentorRouter.get('/rosie-mentor/:id', (req,res)=>{
  const {id} = req.params;
  Mentor.getOneRosieMentor(id).then((mentors)=>{
    res.json(mentors);
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message: 'You caught an error with the GET ONE route'});
  });
});


// UPDATE MENTOR WITH NEW ROSIE
MentorRouter.put('/:mentorId/add-rosie/:rosieId',(req,res)=>{
    Mentor.addRosieToMentor(req.params).then((mentor)=>{
      res.json(mentor);
    }).catch((error)=>{
      console.log(error);
      res.status(500).json({message:'You caught and error with the PUT route'})
    });
});

// UPDATE MENTOR - REMOVE ROSIE
MentorRouter.put('/:mentorId/remove-rosie/:rosieId',(req,res)=>{
    Mentor.removeRosieFromMentor(req.params).then((mentor)=>{
      res.json(mentor);
    }).catch((error)=>{
      console.log(error);
      res.status(500).json({message:'You caught and error with the PUT route'})
    });
});

// UPDATE MENTOR   ////////////////////////////////////////////////////

MentorRouter.put('/:id', (req, res) => {
  const {id} = req.params;
  Mentor.updateMentor(id, req.body).then((mentorReturn) => {
    res.send(mentorReturn)
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message:'You caught and error with the PUT route'});
  })
});






module.exports = MentorRouter;
