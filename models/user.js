module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    // Giving the User model a name of type STRING
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: 1 }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: 1 }
    },
    userImage: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  User.associate = models => {
    // Associating User with check ins
    // When an User is deleted, also delete any associated Posts
    User.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  User.associate = models => {
    User.belongsToMany(models.Group, { through: "UserGroup" });
  };

  return User;
};
