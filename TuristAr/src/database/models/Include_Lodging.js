/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/types').DataTypes} dataTypes 
 * @returns 
 */

module.exports = (sequelize, dataTypes) => {
    let alias= "Include_Lodging"

    let cols= {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_lodging:{
            type: dataTypes.INTEGER
        },

        id_include:{
            type: dataTypes.INTEGER
        }
        
    }

    let config = {
        tableName: 'include_lodging', //aca va el nombre de la tabla como sale en la base de datos 
        timestamps: false //crea marcas de tiempo cuando haces creacion y modificacion de registros, obligatorio en caso de no haber createAdate updateADate
    };

    const Include_Lodging = sequelize.define(alias, cols, config) // aca hay que completar los 3 parametros 
      
    return Include_Lodging
}