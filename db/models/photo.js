const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Category, { foreignKey: 'categoryId', onDelete: 'CASCADE' });
      this.hasMany(models.Like, { foreignKey: 'photoId' });
    }
  }
  Photo.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      photoPath: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Photo',
    },
  );
  return Photo;
};
