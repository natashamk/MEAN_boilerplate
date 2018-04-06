var mongoose = require('mongoose');
var Task = mongoose.model('Task');

module.exports = {
	//Display all 
    showAll: function (req, res) {
        Task.find({}, function (err, data) {
            if (err) {
                res.json({message: "error", err: err});
            } else {
            	res.json({message: "success", data: data});

            }
        })
    },
    //Find one and display
    showTask: function (req, res) {
        Task.findOne({ _id: req.params.id }, function (err, data) { 
            if (err) {
                res.json({message: "error", err: err});
            } else {
            	res.json({message: "success", data: data});
            }
        })
    },
    // Create new and add to DB 
    createTask: function (req, res) {
        console.log("POST DATA", req.body);
        var newTask = new Task();
        newTask.title = req.body.title;
        newTask.description = req.body.description;
        newTask.completed = req.body.completed;
        newTask.save(function (err, Task) {
            if (err) {
                res.json({message: "error", err: err});
            } else {
            res.json({message: "success", data: data});

            }
        })
    },
	// Edit and update existing item
    editTask: function (req, res) {
        var update = {
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed
        }
        Task.findByIdAndUpdate(req.params.id, update, function (err, data){
                if (err) {
                	res.json({message: "error", err: err});
                } else {
                	res.json({message: "success", data: data});

                }
        })
    },
	// Delete 
    deleteTask: function (req, res) {
        Task.findByIdAndRemove({ _id: req.params.id }, function (err) {
            if (err) {
                res.json({message: "error", err: err});
            } 
        })
    }
};
