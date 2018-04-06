var mongoose = require('mongoose');
var TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean, default: false,

   });
   
var Task = mongoose.model('Task', TaskSchema)