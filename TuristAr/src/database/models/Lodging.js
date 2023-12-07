/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/types').DataTypes} dataTypes 
 * @returns 
 */


module.exports = (sequelize, dataTypes) => {
    let alias= "Lodging"

    let cols= {
       id_lodging:{
        type: dataTypes.INTEGER, //SIEMPRE
        primaryKey: true,
        autoIncrement: true
       },
       name:{
        type: dataTypes.STRING
       },
       description:{
        type: dataTypes.STRING
       },
       price:{
        type: dataTypes.BIGINT
       },
       persons:{
        type: dataTypes.INTEGER
       },
       id_user:{
        type: dataTypes.INTEGER
       },
       province:{
        type: dataTypes.STRING
       },
       locality:{
        type: dataTypes.STRING
       },
       street:{
        type: dataTypes.STRING
       }

    }

    let config = {
        tableName: 'lodging', //aca va el nombre de la tabla como sale en la base de datos 
        timestamps: false //crea marcas de tiempo cuando haces creacion y modificacion de registros, obligatorio en caso de no haber createAdate updateADate
    };

    const Lodging = sequelize.define(alias, cols, config) // aca hay que completar los 3 parametros 

    Lodging.associate = function(models) {

        // Un hospedaje tiene muchos usuarios 
       Lodging.belongsToMany(models.User, {
          as: "favorites",
          through: models.Favorite,
          foreignKey: 'id_lodging',
          otherKey: 'id_user',
          timestamps: false
        });
      
        // un hospedaje tiene muchos usuarios que reservan 
        Lodging.belongsToMany(models.User, {
          as:"reserves",
          through: models.Reserve,
          foreignKey: 'id_lodging',
          otherKey: 'id_guest',
          timestamps: false
        });
     
          // Un hospedaje tiene muchos servicios
          Lodging.belongsToMany(models.Include, {
            as: "services",
            through: models.Include_Lodging,
            foreignKey: 'id_lodging',
            otherKey: 'id_include',
            timestamps: false
          });
        

        //un hospedaje pertenece a un usuario (propiedad)
        Lodging.belongsTo(models.User, {
          as: "user",
          foreignKey: "id_user"
        })
    
        //un hospedaje pertenece a un usuario (propiedad)
        Lodging.hasMany(models.Image_lodging, {
          as: "images",
          foreignKey: "id_lodging"
        })
      
    };
    return Lodging
}