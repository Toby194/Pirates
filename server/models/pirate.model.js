const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name!'],
      minlength: [3, 'Please provide a name that is at least 3 characters.'],
    },

    phrase: {
      type: String,
      required: [true, 'Please provide a phrase'],
      minlength: [3, 'Please provide a phrase that is at least 3 characters.'],
    },
    chest: {
      type: Number,
      required: [true, 'Please provide chest wih value more than 0 characters'],
      minlength: [1, 'Please provide chest wih value more than 0 characters'],
    },
    position: {
      type: String,
    },
    imageUrl: {
      type: String,
      required: [true, 'Please provide an image URL!'],
    },

    leg: {
      type: Boolean,
      required: [true, 'Please specify if the pirate is peg leg.'],
    },
    patch: {
      type: Boolean,
      required: [true, 'Please specify if the pirate is eye patch.'],
    },
    hook: {
      type: Boolean,
      required: [true, 'Please specify if the pirate is hook hand.'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports.Pirate = mongoose.model('Pirate', PirateSchema);
