module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {

    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    user_pass: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8]
      }
    }
    
  });

  return users;
};
