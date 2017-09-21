var express = require('express');
var router = express.Router();
//var cors = require('cors');
var mongojs = require('mongojs');
var db = mongojs('mongodb://manaspatel:22duduka@ds147034.mlab.com:47034/manaspatel_testdb', ['tasks']);


//get for all tasks
router.get('/tasks', function (req, res, next) {
    // res.send('Router APi');
    db.tasks.find(function (err, tasks) {
        if (err) {
            res.send(err);
        }
        res.json(tasks);
    });
});

//get for one perticular  tasks
router.get('/tasks/:id', function (req, res, next) {
    // res.send('Router APi');
    db.tasks.findOne({ _id: mongojs.ObjectId(req.params.id) }, function (err, task) {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
});


//Save task
router.post('/task', function () {

    var task = req.body;
    if (!task.title || (task.isDone + '')) {
        res.status(400);
        res.json({
            "error": "bad data "
        });

    } else {
        db.task.save(task, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.json(task);
        });

    }
});

//Delete Task
router.delete('/tasks/:id', function (req, res, next) {
    // res.send('Router APi');
    db.tasks.remove({ _id: mongojs.ObjectId(req.params.id) }, function (err, task) {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
});

//update Task
router.put('/tasks/:id', function (req, res, next) {

    var task = req.body;
    var updTask = {};

    if (task.isDone) {
        updTask.isDone = task.isDone;
    }
    if (task.title) {
        updTask.title = task.title;
    }
    if (!updTask) {
        res.status(400);
        res.json({
            "error": "bad daat"
        });
    } else {

        db.tasks.update({ _id: mongojs.ObjectId(req.params.id) }, updTask, {}, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.json(task);
        });
    }


});
module.exports = router;