const { User, Box, Chocolate } = require("../model");
const db = require('./db')

async function seed() {
	// drop and create all tables
	await db.sync({
		force: true,
	});

	//create users

	const user1 = await User.create({
		name: "User1",
		email: "user1@email.com",
	});
	const user2 = await User.create({
		name: "User2",
		email: "user2@email.com",
	});
	const user3 = await User.create({
		name: "User3",
		email: "user3@email.com",
	});

	// create boxes
	const varietyBox = await Box.create({
		type: "Variety",
		description: "A mix of many different types of chocolates",
		rating: 9,
	});
	const milkBox = await Box.create({
		type: "Milk",
		description: "A selection of fine milk chocolates",
		rating: 10,
	});
	const darkBox = await Box.create({
		type: "Dark",
		description: "High cacao content from around the world",
		rating: 8,
	});
	const customBox = await Box.create({
		type: "Custom",
	});

	//create chocolates
	const milkBlock = await Chocolate.create({
		title: "Milk Block",
	});
	const praline = await Chocolate.create({
		title: "Praline",
		description: "Milk chocolate with hazelnut filling",
	});
	const caramelCrunch = await Chocolate.create({
		title: "Caramel Crunch",
		description:
			"Milk chocolate with crunchy pieces on the outside and smooth caramel on the inside",
	});
	const whiteTruffle = await Chocolate.create({
		title: "White Truffle",
		description: "A milky, white chocolate truffle with a smooth centre",
	});
	const darkTruffle = await Chocolate.create({
		title: "Dark Truffle",
		description: "A rich, dark truffle with a smooth centre",
	});
	const darkHazelnut = await Chocolate.create({
		title: "Dark Hazelnut",
		description:
			"A crunchy hazelnut wrapped in smooth caramel, enveloped in crisp, dark chocolate",
	});
	const darkSaltedCaramel = await Chocolate.create({
		title: "Dark Salted Caramel",
		description:
			"Rich, dark chocolate with sweet and salty caramel inside, topped with flakes of sea salt",
	});

	//build boxes
	varietyBox.addChocolates([caramelCrunch, whiteTruffle, darkSaltedCaramel])
	milkBox.addChocolates([milkBlock, praline, caramelCrunch])
	darkBox.addChocolates([darkTruffle, darkHazelnut, darkSaltedCaramel])

}

module.exports = {seed}
