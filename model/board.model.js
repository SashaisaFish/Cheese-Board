const {DataTypes, Model} = require('sequelize')
const db = require('../db/db')

class Board extends Model {}

Board.init(
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
			defaultValue: "A board of chocolate",
		},
		rating: {
			type: DataTypes.INTEGER,
			defaultValue: 0
		},
	},
	{ sequelize: db }
);


module.exports = Board