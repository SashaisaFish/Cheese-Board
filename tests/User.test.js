const User = require("../model/user.model");
const db = require("../db/db");

beforeAll(async () => {
	await User.sync({ force: true });
	await User.create({
		name: "User1",
		email: "user1@email.com",
	});
})

test("Can initialise user name", async () => {
	const test = await User.findOne({ where: { name: "User1" } });
	expect(test.getDataValue("name")).toMatch("User1");
});

test("Can initialise user email", async () => {
	const test = await User.findOne({ where: { name: "User1" } });
	expect(test.getDataValue("email")).toMatch("user1@email.com");
});

// describe("TEST GROUP", async () => {
// 	test("TEST", async () => {});
// });
