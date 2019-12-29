module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define("Group", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [4, 4]
    },
    prize: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Group.associate = models => {
    // We're saying that a Group should belong to user
    // A Group can be created without an user due to the foreign key constraint
    Group.hasMany(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  Group.associate = models => {
    // We're saying that a Group should belong to user
    // A Group can't be created without an user due to the foreign key constraint
    Group.hasMany(models.Posts, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Group;
};
