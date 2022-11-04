const { Box, Chocolate, User } = require("../model");
const db = require("../db/db");
const { seed } = require("../db/seed");
let user1;
let varietyBox;
let milkBox;
let darkBox;
let customBox;
let milkBlock;
let praline;
let darkTruffle;
let mysteryChocolate;
//testing variables
beforeEach(async () => {
    await seed()
	user1 = await User.findOne({ where: { name: "User1" } });
	varietyBox = await Box.findOne({ where: { type: "Variety" } });
	milkBox = await Box.findOne({ where: { type: "Milk" } });
	darkBox = await Box.findOne({ where: { type: "Dark" } });
	customBox = await Box.findOne({ where: { type: "Custom" } });
	milkBlock = await Chocolate.findOne({ where: { title: "Milk Block" } });
	praline = await Chocolate.findOne({ where: { title: "Praline" } });
	darkTruffle = await Chocolate.findOne({ where: { title: "Dark Truffle" } });
	mysteryChocolate = await Chocolate.findOne({
		where: { title: "Mystery Chocolate" },
	});
});

describe("Test associations", () => {
	//beforeEach(async () => await seed());

	test("A user can own many boxes", async () => {
		await user1.addBoxes([varietyBox, milkBox, darkBox]);
		// might be easier to use count boxes and expect boxes to be 3
		const boxes = await user1.getBoxes();
		expect(boxes.map((b) => b.type)).toEqual(["Variety", "Milk", "Dark"]);
	});

	test("A box can have many chocolates", async () => {
		await customBox.addChocolates([milkBlock, praline, darkTruffle]);
		const chocolates = await customBox.getChocolates();
		expect(chocolates.map((c) => c.title)).toEqual([
			"Milk Block",
			"Praline",
			"Dark Truffle",
		]);
	});

	test("A chocolate can be in many boxes", async () => {
		await mysteryChocolate.addBoxes([varietyBox, milkBox, customBox]);
		const boxes = await mysteryChocolate.getBoxes();
		expect(boxes.map((b) => b.type)).toEqual(["Variety", "Milk", "Custom"]);
	});
});

describe("Test eager loading", () => {
	//beforeEach(() => seed());

	test("A single box can be loaded with one chocolate", async () => {
        await mysteryChocolate.addBox(customBox)
		const findMystery = await Chocolate.findByPk(8, { include: Box });
		//console.log(JSON.stringify(findMystery, null, 2));
		expect(findMystery.Boxes[0].type).toMatch("Custom")
	});



	test("Multiple boxes can be loaded with one chocolate", async () => {
		const findMulti = await Chocolate.findByPk(3, { include: Box });
        //console.log(JSON.stringify(findMulti, null, 2));
	    expect(findMulti.Boxes.map((b) => b.type).sort()).toEqual([
            "Variety",
			"Milk"
		].sort());
	});

	test("A user can be loaded with their boxes", async () => {
		await user1.addBox(customBox);
		const findUser = await Box.findByPk(4, { include: User });
		// console.log(JSON.stringify(findUser, null, 2));
		expect(findUser.User.name).toMatch("User1");
	});

	//   test("A chocolate can be loaded with its boxes", async () => {

    //});
});

// describe("TEST GROUP", () => {
// 	test("TEST", async () => {});
// });
