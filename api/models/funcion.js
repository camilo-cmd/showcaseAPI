const { sequelize } = require('../config/db.js');
const { DataTypes } = require('sequelize');


const funcion = sequelize.define(
    'funcion',
    {
        id_Funcion: {
            type: DataTypes.MEDIUMINT.UNSIGNED,
            primaryKey: true,
            autoIncrement:true
        },
        id_sala: {
            type: DataTypes.TINYINT.UNSIGNED,
            primaryKey: true,
        },
        id_pelicula: {
            type: DataTypes.TINYINT.UNSIGNED,
            primaryKey: true,
        },
        id_tecnologia: {
            type: DataTypes.TINYINT.UNSIGNED,
            primaryKey: true,
        },
        idioma: {
            type: DataTypes.STRING(10),
            validate: {
                isAlpha: true
            }
        },
        proyeccion: {
            type: DataTypes.STRING(10),
            validate: {
                isAlpha: true
            }
        },
        horarioInicio: {
            type: DataTypes.DATETIME,
            validate: {
                isDate: true
            }
        },
        DVH: {
            type: DataTypes.STRING(6),
            allowNull: false,
            validate: {
                isAlphanumeric: true
            }
        }
    },
    {
        timestamps: false,
    }
)


module.exports = { funcion }
