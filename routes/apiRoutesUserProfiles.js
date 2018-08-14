var db = require("../models");

module.exports = function (app) {

    app.get("/api/posts", function (req, res) {
        var query = {};
        if (req.query.author_id) {
            query.UserId = req.query.author_id;
        }
        db.User.findAll({
            where: query,
            include: [db.User]
        }).then(function (dbUser) {
            res.json(dbUser)
        });
    });

    app.get("/api/posts/:id", function (req, res) {
        db.User.findOne({
            where: {
                id: req.params.id
            },
            include: [db.User]
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    app.post("/api/posts", function (req, res) {
        db.User.create(req.body).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    app.delete("/api/posts/:id", function (req, res) {
        db.User.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    app.put("/api/users/:id/:info", function (req, res) {
        db.User.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });
};
