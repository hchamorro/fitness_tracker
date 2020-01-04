module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 300]
      }
    },
    image: {
      type: DataTypes.STRING
    }
  });

  Post.associate = function(models) {
    // We're saying that a Post should belong to an User
    // A Post can't be created without an User due to the foreign key constraint
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  Post.associate = models => {
    Post.belongsToMany(models.Group, { through: "PostGroup" });
  };

  return Post;
};
