module.exports = (sequelize, DataTypes) => {
  const PersonalInfo = sequelize.define('PersonalInfo', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: !false,
      validate: {
        len: [1, 3]
      }
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: !false,
      validate: {
        len: [1, 3]
      }
    },
    DOB: {
      type: DataTypes.DATEONLY,
      allowNull: !false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true
    },

    venmo: {
      type: DataTypes.STRING,
      allowNull: !false,
      validate: {
        len: [1]
      }
    },
    userImage: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });

  PersonalInfo.associate = models => {
    // We're saying that a PersonalInfo should belong to user
    // A PersonalInfo can't be created without an user due to the foreign key constraint
    PersonalInfo.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return PersonalInfo;
};
