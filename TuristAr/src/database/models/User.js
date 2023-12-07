/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/types').DataTypes} dataTypes 
 * @returns 
 */


module.exports = (sequelize, dataTypes) => {
  let alias= "User"

  let cols= {
     id:{
      type: dataTypes.INTEGER, //SIEMPRE
      primaryKey: true,
      autoIncrement: true
     },
     name:{
      type: dataTypes.STRING
     },
     last_name:{
      type: dataTypes.STRING
     },
     email:{
      type: dataTypes.STRING
     },
     password:{
      type: dataTypes.STRING
     },
     password2:{
      type: dataTypes.STRING
     },
     image:{
      type: dataTypes.STRING
     },
     phone:{
      type: dataTypes.BIGINT
     },
     birth_day:{
      type: dataTypes.DATE
     }

  }

  let config = {
      tableName: 'user', //aca va el nombre de la tabla como sale en la base de datos 
      timestamps: false //crea marcas de tiempo cuando haces creacion y modificacion de registros, obligatorio en caso de no haber createAdate updateADate
  };

  const User = sequelize.define(alias, cols, config) // aca hay que completar los 3 parametros 

  User.associate = function(models) {
    // Un usuario puede tener muchos favoritos(hospedajes favoritos)
    User.belongsToMany(models.Lodging, {
      as: "favorites",
      through: models.Favorite,
      foreignKey: 'id_user',
      otherKey: 'id_lodging',
      timestamps: false
    });

    //un usuario tiene muchos hospedajes reservados 
    User.belongsToMany(models.Lodging, {
      as: "reserves",
      through: models.Reserve,
      foreignKey: 'id_guest',
      otherKey: 'id_lodging',
      timestamps: false
    });
  
    User.hasMany(models.Lodging, {
      as: "lodging",
      foreignKey: "id_user"
    })
  };
  return User
}