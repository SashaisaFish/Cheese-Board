const {Box, Chocolate, User} = require('../model')
const db = require("../db/db");
const {seed} = require('../db/seed')
let user1;
let varietyBox
let milkBox
let darkBox
//testing variables
beforeAll(async() => {
user1 = await User.findOne({where: {name: "User1"}})
varietyBox = await Box.findOne({where: {type: "Variety"}})
milkBox = Box.findOne({where: {type: "Milk"}})
darkBox = Box.findOne({where: {type: "Dark"}})
})


describe("Test associations", () => {
  beforeAll(() => seed())
  // afterEach(() => db.cleanUp())

  test("A user can own box", async () => {
    console.log(user1, "user")
    await user1.addBoxes([varietyBox, milkBox, darkBox])
    const boxes = await user1.Boxes
    console.log(boxes, "box")
    expect(boxes.map(b => b.type).sort()).toMatch(["Variety", "Milk", "Dark"].sort())
  });

  // test("A box can have many chocolates", async () => {});

  // test("A chocolate can be in many boxes", async () => {});
})

// describe("Test eager loading", () => {
//   beforeAll(() => seed());

//   test("A box can be loaded with its chocolates", async () => {

//   });

//   test("A user can be loaded with their boxes", async () => {});

//   test("A cheese can be loaded with its boxes", async () => {});
// })

// describe("TEST GROUP", () => {
// 	test("TEST", async () => {});
// });