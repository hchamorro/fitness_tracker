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
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 8]
      }
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 3]
      }
    },
    DOB: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true
    },

    venmo: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    userImage: {
      type: DataTypes.TEXT('long'),
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
