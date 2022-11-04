const Box = require("./box.model");
const Chocolate = require("./chocolate.model");
const User = require("./user.model");

// User <-> Board
User.hasMany(Box);
Box.belongsTo(User);

// Box <-> Chocolate
Box.belongsToMany(Chocolate, { through: "Chocolate_Box" });
Chocolate.belongsToMany(Box, { through: "Chocolate_Box" });

module.exports = { Box, Chocolate, User };
