const { sequelize } = require('../config/db.js');
const { DataTypes } = require('sequelize');


const Transaccion = sequelize.define(
    'transaccion',
    {
        id_transaccion: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement:true
        },
        id_ClienteLogueado: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
        },
        total: DataTypes.INTEGER(8),
        fechaDeEmision: {
            type: DataTypes.DATETIME,
            validate: {
                isDate: true
            }
        },
        fechaVencimiento: {
            type: DataTypes.DATETIME,
            validate: {
                isDate: true
            }
        },
        metodoDePago: {
            type: DataTypes.STRING(15),
            validate: {
                isAlpha: true
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


module.exports = { Transaccion }