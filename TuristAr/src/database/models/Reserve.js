/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/types').DataTypes} dataTypes 
 * @returns 
 */


module.exports = (sequelize, dataTypes) => {
    let alias= "Reserve"

    let cols= {
        id_reserve:{
            type: dataTypes.INTEGER, //SIEMPRE
            primaryKey: true,
            autoIncrement: true
        },
        id_guest:{
            type: dataTypes.INTEGER
        },
        id_lodging:{
            type: dataTypes.INTEGER
        },
        check_in:{
            type: dataTypes.DATE
        },
        check_out:{
            type: dataTypes.DATE
        },
        count_persons:{
            type: dataTypes.INTEGER
        }

    }

    let config = {
        tableName: 'reserve', //aca va el nombre de la tabla como sale en la base de datos 
        timestamps: false //crea marcas de tiempo cuando haces creacion y modificacion de registros, obligatorio en caso de no haber createAdate updateADate
    };

    const Reserve = sequelize.define(alias, cols, config) // aca hay que completar los 3 parametros 

    Reserve.associate = function(models) {
        // Una reserva pertenece a un usuario
       Reserve.belongsTo(models.User, {
          as: "user",
          foreignKey: 'id_guest'
        });
      };
    
    return Reserve
}