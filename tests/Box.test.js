const Box = require("../model/Box.model");
const db = require("../db/db");

beforeAll(async () => {
	await Box.sync({ force: true });
	await Box.create({
      type: "Variety",
      description: "A mix of many different types of chocolates",
      rating: 9
	});
});

test("Can initialise Box type", async () => {
	const test = await Box.findOne({ where: { type: "Variety" } });
	expect(test.getDataValue("type")).toMatch("Variety");
});

test("Can initialise Box description", async () => {
	const test = await Box.findOne({ where: { type: "Variety" } });
	expect(test.getDataValue("description")).toMatch(
		"A mix of many different types of chocolates"
	);
});

test("Can initialise Box rating", async () => {
	const test = await Box.findOne({ where: { type: "Variety" } });
	expect(test.getDataValue("rating")).toBe(9);
});

// describe("TEST GROUP", async () => {
// 	test("TEST", async () => {});
// });
