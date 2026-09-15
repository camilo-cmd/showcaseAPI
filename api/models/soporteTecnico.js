
// sacar a la mierda, unificar con rol

const { sequelize } = require('../config/db.js');
const { DataTypes } = require('sequelize');


const SoporteTecnico = sequelize.define(
    'soporteTecnico',
    {
        id_soporteTecnico: {
            type: DataTypes.TINYINT.UNSIGNED,
            primaryKey: true,
            autoIncrement:true
        },
        nombre: {
            type: DataTypes.STRING(15),
            validate: {
                isAlpha: true
            }
        },
        apellido: {
            type: DataTypes.STRING(15),
            validate: {
                isAlpha: true
            }
        },
        dni:{
            type: DataTypes.STRING(10),
            validate: {
                isAlphanumeric: true
            }
        },
        telefono: DataTypes.STRING(17),
        mail: {
            type: DataTypes.STRING(20),
            validate: {
                isEmail: true
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


module.exports = { SoporteTecnico }