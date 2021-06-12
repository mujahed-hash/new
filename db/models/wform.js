const mongoose  = require("mongoose")
var timestamps = require('mongoose-timestamp');

const wformSchema = mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    number:{
        type:String
    },
    email:{
        type:String
    },
    business:{
        type:String
    },
    description:{
        type:String
    },
    created_at: {
        type: Date,
        default: function(){
          return Date.now();
        }
      },
      updated_at: {
        type: Date,
        default: function(){
          return Date.now();
        }
      }
});

wformSchema.pre('save', function(done) {
    this.updated_at = Date.now();
    done();
  });


module.exports = mongoose.model('wform', wformSchema);