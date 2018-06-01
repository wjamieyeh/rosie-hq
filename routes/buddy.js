// Page Controller: Angela
const express = require('express'),
  BuddyRouter = express.Router(),
  Buddy = require('.././models/buddy');

// GET ALL BUDDYS ////////////////////////////////////////////////////

BuddyRouter.get('/', (req, res) => {
  Buddy.find().then((buddys) => {
    res.json(buddys);
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message: 'You caught an error'});
  });
});

// GET ONE BUDDY ////////////////////////////////////////////////////

BuddyRouter.get('/:id', (req, res) => {
  const {id} = req.params;
  Buddy.findOneBuddy(id).then((buddy) => {
    res.json(buddy);
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message: 'You caught an error with the GET method'});
  });
});

// UPDATE BUDDY ACTIVE STATUS ////////////////////////////////////////////////////

BuddyRouter.put('/changestatus/:id', (req, res) => {
  const {id} = req.params;

  Buddy.findOneBuddy(id).then((manager) => {
    const active = !manager.active;
    Buddy.changeStatusOneBuddy(id, active).then((buddyReturn) => {
      res.send(buddyReturn)
    }).catch((error) => {
      console.log(error);
      res.status(500).json({message: 'You caught an error internal'});
    })
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message: 'You caught an error with the PUT method'});
  });
});

// DESTROY ONE BUDDY ////////////////////////////////////////////////////
BuddyRouter.delete('/:id', (req, res) => {
  const {id} = req.params;
  Buddy.destroyOneBuddy(id).then((buddy) => {
    res.json(buddy);
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message: 'You caught an error with the DELETE METHOD'});
  });
});

// CREATE ONE BUDDY ////////////////////////////////////////////////////
BuddyRouter.post('/', (req, res) => {
  Buddy.createOneBuddy(req.body).then((buddy) => {
    res.json(buddy);
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message: 'You caught an error with the CREATE route'});
  });
});

// GET A ROSIE'S BUDDY(S) ////////////////////////////////////////////////////
BuddyRouter.get('/rosie-buddy/:id', (req,res)=>{
  const {id} = req.params;
  Buddy.getOneRosieBuddy(id).then((buddys)=>{
    res.json(buddys);
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message: 'You caught an error with the GET ONE route'});
  });
});

// UPDATE BUDDY WITH NEW ROSIE ////////////////////////////////////////////////////
BuddyRouter.put('/:buddyId/add-rosie/:rosieId',(req,res)=>{
    Buddy.addRosieToBuddy(req.params).then((buddy)=>{
      res.json(buddy);
    }).catch((error)=>{
      console.log(error);
      res.status(500).json({message:'You caught and error with the PUT route'})
    });
});

// UPDATE BUDDY WITH NEW ROSIE ////////////////////////////////////////////////////
BuddyRouter.put('/:buddyId/remove-rosie/:rosieId',(req,res)=>{
    Buddy.removeRosieFromBuddy(req.params).then((buddy)=>{
      res.json(buddy);
    }).catch((error)=>{
      console.log(error);
      res.status(500).json({message:'You caught and error with the PUT route'})
    });
});

// UPDATE BUDDY   ////////////////////////////////////////////////////

BuddyRouter.put('/:id', (req, res) => {
  const {id} = req.params;
  Buddy.updateBuddy(id, req.body).then((buddyReturn) => {
    res.send(buddyReturn)
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message:'You caught and error with the PUT route'});
  })
});



module.exports = BuddyRouter;
