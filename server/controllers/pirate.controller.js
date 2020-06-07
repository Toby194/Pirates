const { Pirate } = require('../models/pirate.model');

module.exports.index = (req, res) => {
  res.json({
    message: "Hello World"
  });
}

module.exports.createPirate = (req, res) => {
    
    Pirate.create(req.body)
      .then(createdPirate => res.json(createdPirate))
      .catch(err => res.json(err));
  }

module.exports.getAll = (_req, res) => {
    Pirate.find()
      .then(pirates => res.json(pirates))
      .catch(err => res.json(err));
  }

  module.exports.getOne = (req, res) => {
    Pirate.findById({_id:req.params.id})
      .then(pirate => res.json(pirate))
      .catch(err => res.json(err));
  }

  module.exports.delete = (req, res) => {
    Pirate.findByIdAndDelete({_id:req.params.id})
      .then(() => res.json({ status: 'success' }))
      .catch(err => res.json(err));
  }

  module.exports.update = (req, res) => {
    Pirate.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true})
      .then(() => res.json({status:"success"}))
      .catch(err => res.json(err))
  } 