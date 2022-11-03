const { DataTypes, Model } = require("sequelize");
const db = require("../db/db");

class Chocolate extends Model {}

Chocolate.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
			defaultValue: "Yummy!",
		}
	},
	{ sequelize: db }
);

module.exports = Chocolate