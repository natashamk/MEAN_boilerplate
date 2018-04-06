var tasks = require("../controllers/tasks.js");
var path = require('path');

module.exports = function(app){
    app.get("/tasks", tasks.showAll),
    app.post("/tasks", tasks.createTask),
    app.get("/tasks/:id", tasks.showTask),
    app.post("/tasks/:id", tasks.editTask),
    app.get("/delete/:id", tasks.deleteTask)
}