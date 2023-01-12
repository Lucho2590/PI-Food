const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('diets', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createInDb: { // Se utiliza para buscar por ID unicamente que este en la DB. 
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
    }, {
        timestamps: false,
    });
};