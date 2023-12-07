/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/types').DataTypes} dataTypes 
 * @returns 
 */

module.exports = (sequelize, dataTypes) => {
    let alias= "Include"

    let cols= {
      id_include:{
        type: dataTypes.INTEGER, //SIEMPRE
            primaryKey: true,
            autoIncrement: true
      },
    
      name:{
        type: dataTypes.STRING
      }

    }

    let config = {
        tableName: 'include', //aca va el nombre de la tabla como sale en la base de datos 
        timestamps: false //crea marcas de tiempo cuando haces creacion y modificacion de registros, obligatorio en caso de no haber createAdate updateADate
    };

    const Include = sequelize.define(alias, cols, config) // aca hay que completar los 3 parametros 

    Include.associate = function(models) {
      //un servicio tiene muchos hospedajes
      Include.belongsToMany(models.Lodging, {
        as: "services",
        through: models.Include_Lodging,
        foreignKey: 'id_include',
        otherKey: 'id_lodging',
        timestamps: false
      });
    };

    return Include
}