const { sequelize } = require('../config/db.js');
const { DataTypes } = require('sequelize');


const Tecnologia = sequelize.define(
    'tecnologia',
    {
        id_tecnologia: {
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
        descripcion: {
            type: DataTypes.STRING(20),
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


module.exports = { Tecnologia }