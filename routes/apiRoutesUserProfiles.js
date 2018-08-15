var db = require("../models");

module.exports = function (app) {

    /*
    app.get("/api/posts", function (req, res) {
        var query = {};
        if (req.query.id) {
            query.userId = req.query.id;
        }
        db.users.findAll({
            where: query,
            include: [db.user]
        }).then(function (dbuser) {
            res.json(dbuser)
        });
    });

    app.get("/api/posts/:id", function (req, res) {
        db.users.findOne({
            where: {
                id: req.params.id
            },
            include: [db.user]
        }).then(function (dbuser) {
            res.json(dbuser);
        });
    });

    app.post("/api/posts", function (req, res) {
        db.users.create(req.body).then(function (dbuser) {
            res.json(dbuser);
        });
    });

    app.delete("/api/posts/:id", function (req, res) {
        db.users.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbuser) {
            res.json(dbuser);
        });
    });

    app.put("/api/users/:id/:info", function (req, res) {
        db.users.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(function (dbuser) {
            res.json(dbuser);
        });
    });
    */
};
