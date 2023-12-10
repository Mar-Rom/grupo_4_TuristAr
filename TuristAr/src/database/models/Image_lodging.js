/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/types').DataTypes} dataTypes 
 * @returns 
 */

module.exports = (sequelize, dataTypes) => {
    let alias= "Image_lodging"

    let cols= {
        id_image:{
            type: dataTypes.INTEGER, //SIEMPRE
            primaryKey: true,
            autoIncrement: true
        },
        id_lodging:{
            type: dataTypes.INTEGER
        },
        name:{
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: 'images_lodging', //aca va el nombre de la tabla como sale en la base de datos 
        timestamps: false //crea marcas de tiempo cuando haces creacion y modificacion de registros, obligatorio en caso de no haber createAdate updateADate
    };

    const Image_lodging = sequelize.define(alias, cols, config) // aca hay que completar los 3 parametros 

    Image_lodging.associate = function(models){
        //un hospedaje pertenece a un usuario (propiedad)
        Image_lodging.belongsTo(models.Lodging, {
          as: "images",
          foreignKey: "id_lodging"
        })
      };

    return Image_lodging
}