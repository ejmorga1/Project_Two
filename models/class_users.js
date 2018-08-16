module.exports = function (sequelize, DataTypes) {
    var class_users = sequelize.define("class_users", {

        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        
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
                len: [1]
            }
        },

        user_active: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    });

    return class_users;
};