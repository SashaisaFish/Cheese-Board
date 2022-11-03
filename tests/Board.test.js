const Board = require("../model/board.model");
const db = require("../db/db");

beforeAll(async () => {
	await Board.sync({ force: true });
	await Board.create({
      type: "Variety",
      description: "A mix of many different types of chocolates",
      rating: 9
	});
});

test("Can initialise board type", async () => {
	const test = await Board.findOne({ where: { type: "Variety" } });
	expect(test.getDataValue("type")).toMatch("Variety");
});

test("Can initialise board description", async () => {
	const test = await Board.findOne({ where: { type: "Variety" } });
	expect(test.getDataValue("description")).toMatch(
		"A mix of many different types of chocolates"
	);
});

test("Can initialise board rating", async () => {
	const test = await Board.findOne({ where: { type: "Variety" } });
	expect(test.getDataValue("rating")).toBe(9);
});

// describe("TEST GROUP", async () => {
// 	test("TEST", async () => {});
// });
