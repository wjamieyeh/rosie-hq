// Page Controller: Angela
//require('dotenv').config();
const dotenv = require('dotenv').load();

const express = require('express'),
  RosieRouter = express.Router(),
  Rosie = require('.././models/rosie'),
  apikey = process.env.APIKEY,
  rp = require('request-promise');

  // Get Multiselect for rosies   ////////////////////////////////////////////////////

  RosieRouter.get('/rosiesformulti/', (req, res) => {
    Rosie.rosiesForMultiselect().then((rosies) => {
      res.json(rosies);
    }).catch((error) => {
      console.log(error);
      res.status(500).json({message: 'You caught an error'});
    });
  });

// GET ALL ROSIES //////////////////////////////////////////////////

RosieRouter.get('/', (req, res) => {
  Rosie.find().then((rosies) => {
    res.json(rosies);
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message: 'You caught an error'});
  });
});

// GET ONE ROSIE //////////////////////////////////////////////////

RosieRouter.get('/:id', (req, res) => {
  const {id} = req.params;
  Rosie.findOneRosie(id).then((rosie) => {
    rp(`https://rostr.disney.com/api/v2/people/${rosie.rostr_id}?locale=en&token=${apikey}`).then((apiRosie) => {
      const apiRosieObject = JSON.parse(apiRosie);
      const combinedRosieData = Object.assign(apiRosieObject, rosie)
      res.json(combinedRosieData);
      // console.log(combinedRosieDatas);
    }).catch((error) => {
      console.log(error);
      res.status(500).json({message: 'You caught an error with the API REQUEST method'});
    })
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message: 'You caught an error with the GET method'});
  });
});

// UPDATE ROSIE ACTIVE STATUS //////////////////////////////////////////////////

RosieRouter.put('/changestatus/:id', (req, res) => {
  const {id} = req.params;

  Rosie.findOneRosie(id).then((rosie) => {
    const active = !rosie.active;
    Rosie.changeStatusOneRosie(id, active).then((rosieReturn) => {
      res.send(rosieReturn)
    }).catch((error) => {
      console.log(error);
      res.status(500).json({message: 'You caught an error internal'});
    })
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message: 'You caught an error with the PUT method'});
  });
});

// DESTROY ONE ROSIE //////////////////////////////////////////////////
RosieRouter.delete('/:id', (req, res) => {
  const {id} = req.params;
  Rosie.destroyOneRosie(id).then((rosie) => {
    res.json(rosie);
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message: 'You caught an error with the DELETE METHOD'});
  });
});

// CREATE ONE ROSIE //////////////////////////////////////////////////
RosieRouter.post('/', (req, res) => {
  Rosie.createOneRosie(req.body).then((rosie) => {
    res.json(rosie);
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message: 'You caught an error with the CREATE route'});
  });
});

// UPDATE Rosie   ////////////////////////////////////////////////////

RosieRouter.put('/:id', (req, res) => {
  const {id} = req.params;
  Rosie.updateRosie(id, req.body).then((rosieReturn) => {
    res.send(rosieReturn)
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message:'You caught and error with the PUT route'});
  })
});

// SMALL UPDATE Rosie   ////////////////////////////////////////////////////

RosieRouter.put('/smallupdate/:id', (req, res) => {
  const {id} = req.params;
  Rosie.smallUpdateRosie(id, req.body).then((rosieReturn) => {
    res.send(rosieReturn)
  }).catch((error) => {
    console.log(error);
    res.status(500).json({message:'You caught and error with the PUT route'});
  })
});




module.exports = RosieRouter;
