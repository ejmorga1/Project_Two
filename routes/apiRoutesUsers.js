var db = require("../models");

module.exports = function(app) {

  app.get("/api/users", function(req, res) {
    db.Example.findAll({}).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.get("/api/users/:id", function(req, res) {
    db.Example.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.post("/api/users", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.delete("/api/users/:id", function(req, res) {
    db.Example.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

};
