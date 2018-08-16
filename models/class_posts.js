module.exports = function (sequelize, DataTypes) {
    var class_posts = sequelize.define("class_posts", {

        post_title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        post_author: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        post_content: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        post_date: {
            type: DataTypes.STRING, /* ????????? */
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        post_tags: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        post_topic: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }

    });

    return class_users;
};