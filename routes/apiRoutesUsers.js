var db = require("../models");

module.exports = function(app) {

  /*
  app.get("/api/users", function(req, res) {
    db.users.findAll({}).then(function(dbuser) {
      res.json(dbuser);
    });
  });

  app.get("/api/users/:id", function(req, res) {
    db.users.findOne({
      where: {
        id: req.params.id
      },
      include: [db.user]
    }).then(function(dbuser) {
      res.json(dbuser);
    });
  });

  app.post("/api/users", function(req, res) {
    db.users.create(req.body).then(function(dbuser) {
      res.json(dbuser);
    });
  });

  app.delete("/api/users/:id", function(req, res) {
    db.users.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbuser) {
      res.json(dbuser);
    });
  });
  */

};
