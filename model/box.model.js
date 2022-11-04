const {DataTypes, Model} = require('sequelize')
const db = require('../db/db')

class Box extends Model {}

Box.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		type: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
			defaultValue: "A box of chocolates",
		},
		rating: {
			type: DataTypes.INTEGER,
			defaultValue: 0
		},
	},
	{ sequelize: db }
);


module.exports = Box