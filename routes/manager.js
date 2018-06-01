// Page Controller: Angela
const express = require('express'),
  ManagerRouter = express.Router(),
  Manager = require('.././models/manager');

// GET ALL MANAGERS ////////////////////////////////////////////////////

ManagerRouter.get('/', (req, res) => {
  Manager.find().then((managers) => {
    res.json(managers);
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message: 'You caught an error'});
  });
});

// GET ONE MANAGER ////////////////////////////////////////////////////

ManagerRouter.get('/:id', (req, res) => {
  const {id} = req.params;
  Manager.findOneManager(id).then((rosie) => {
    res.json(rosie);
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message: 'You caught an error with the GET method'});
  });
});

// UPDATE MANAGER ACTIVE STATUS ////////////////////////////////////////////////////

ManagerRouter.put('/changestatus/:id', (req, res) => {
  const {id} = req.params;

  Manager.findOneManager(id).then((manager) => {
    const active = !manager.active;
    Manager.changeStatusOneManager(id, active).then((managerReturn) => {
      res.send(managerReturn)
    }).catch((error) => {
      console.log(error);
      res.status(500).json({message: 'You caught an error internal'});
    })
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message: 'You caught an error with the PUT method'});
  });
});

// DESTROY ONE MANAGER ////////////////////////////////////////////////////
ManagerRouter.delete('/:id', (req, res) => {
  const {id} = req.params;
  Manager.destroyOneManager(id).then((manager) => {
    res.json(manager);
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message: 'You caught an error with the DELETE METHOD'});
  });
});

// CREATE ONE MANAGER ////////////////////////////////////////////////////
ManagerRouter.post('/', (req, res) => {
  Manager.createOneManager(req.body).then((manager) => {
    res.json(manager);
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message: 'You caught an error with the CREATE route'});
  });
});

// GET A ROSIE'S MANAGER(S) ////////////////////////////////////////////////////
ManagerRouter.get('/rosie-manager/:id', (req,res)=>{
  const {id} = req.params;
  Manager.getOneRosieManager(id).then((managers)=>{
    res.json(managers);
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message: 'You caught an error with the GET ONE route'});
  });
});

// UPDATE BUDDY WITH NEW ROSIE ////////////////////////////////////////////////////
ManagerRouter.put('/:managerId/add-rosie/:rosieId',(req,res)=>{
    Manager.addRosieToManager(req.params).then((manager)=>{
      res.json(manager);
    }).catch((error)=>{
      console.log(error);
      res.status(500).json({message:'You caught and error with the PUT route'})
    });
});

// UPDATE BUDDY - REMOVE ROSIE ////////////////////////////////////////////////////
ManagerRouter.put('/:managerId/remove-rosie/:rosieId',(req,res)=>{
    Manager.removeRosieFromManager(req.params).then((manager)=>{
      res.json(manager);
    }).catch((error)=>{
      console.log(error);
      res.status(500).json({message:'You caught and error with the PUT route'})
    });
});

// UPDATE MANAGER   ////////////////////////////////////////////////////

ManagerRouter.put('/:id', (req, res) => {
  const {id} = req.params;
  Manager.updateManager(id, req.body).then((managerReturn) => {
    res.send(managerReturn)
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message:'You caught and error with the PUT route'});
  })
});



module.exports = ManagerRouter;
