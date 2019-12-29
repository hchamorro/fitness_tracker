module.exports = (sequelize, DataTypes) => {
  const PersonalInfo = sequelize.define("PersonalInfo", {
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    birthDate: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1, 2]
    },
    birthMonth: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1, 2]
    },
    birthYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [4, 4]
    },
    height: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    weight: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false
    },
    venmo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
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
