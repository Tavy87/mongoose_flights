var mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
var Schema = mongoose.Schema;

	
var destinationSchema = new Schema({
  airline: {
  type: String,
  enum: ['SMF', 'LAX', 'SFO', 'PDX', 'NYC', 'DFW', 'SEA']
  },
  arrival: {
    type: Date, 
    default: function() {
    return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
  },
},
  });

var flightSchema = new Schema({
  airline: {
      type: String,
      enum: ['American', 'Southwest', 'United', 'Spirit', 'Delta' ]
  },
  flightNo: {
      type: Number, 
      min: 10,
      max: 9999,
  },
  departs: {
      type: Date, 
      default: function() {
      return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
      },
  },
  airport: {
      type: String,
      enum: ['SMF', 'SFO', 'PDX', 'LAX', 'NYC', 'DFW', 'SEA'],
  },
  destinations: [destinationSchema]
});

module.exports = mongoose.model('Flight', destinationSchema);