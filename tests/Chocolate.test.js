const Chocolate = require("../model/Chocolate.model");
const db = require("../db/db");
const {seed} = require("../db/seed");

describe("Test creating Chocolate", () => {
beforeAll(async () => {
	await Chocolate.sync({ force: true });
	await Chocolate.create({
		title: "Truffle",
	});
});

test("Can initialise chocolate title", async () => {
	const test = await Chocolate.findOne({ where: { title: "Truffle" } });
	expect(test.getDataValue("title")).toMatch("Truffle");
});

test("Can initialise default description", async () => {
	const test = await Chocolate.findOne({ where: { title: "Truffle" } });
	expect(test.getDataValue("description")).toMatch("Yummy!");
});
})

// describe("TEST GROUP", () => {
// 	test("TEST", async () => {});
// });
