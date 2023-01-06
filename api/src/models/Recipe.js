const { DataTypes, UUID } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('recipe', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        summary: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        healthScore: {
            type: DataTypes.INTEGER,
            validate: {
                min: 0,
                max: 100,
            },
            allowNull: true
        },
        steps: {
            type: DataTypes.STRING,
            allowNull: true
        },
        createInDb: { // Se utiliza para buscar por ID unicamente que este en la DB. 
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },

    }, {
        timestamps: false,
    });
};