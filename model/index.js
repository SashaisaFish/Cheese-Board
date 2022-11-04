const Board = require("./box.model");
const Chocolate = require("./chocolate.model");
const User = require("./user.model");

// User <-> Board
User.hasMany(Board);
Board.belongsTo(User);

// Board <-> Chocolate
Board.belongsToMany(Chocolate, { through: "Chocolate_Board" });
Chocolate.belongsToMany(Board, { through: "Chocolate_Board" });

module.exports = { Board, Chocolate, User };
