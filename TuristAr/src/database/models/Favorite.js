/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/types').DataTypes} dataTypes 
 * @returns 
 */

module.exports = (sequelize, dataTypes) => {
    let alias= "Favorite"

    let cols= {
        id_favorites: {
            type: dataTypes.INTEGER, //SIEMPRE
            primaryKey: true,
            autoIncrement: true
        },
        id_user: {
            type: dataTypes.INTEGER, //SIEMPRE
        },
        id_lodging:{ //hospedaje
            type: dataTypes.INTEGER
        }

    }

    let config = {
        tableName: 'favorites', //aca va el nombre de la tabla como sale en la base de datos 
        timestamps: false //crea marcas de tiempo cuando haces creacion y modificacion de registros, obligatorio en caso de no haber createAdate updateADate
    };

    const Favorite = sequelize.define(alias, cols, config) // aca hay que completar los 3 parametros 

    return Favorite
    
}