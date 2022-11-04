const {User, Box, Chocolate} = require('../model')

async function seed () {

  // drop and create all tables
  await db.sync({
    force: true
  })

  await User.bulkCreate([
		{
			name: "User1",
			email: "user1@email.com",
		},
		{
			name: "User2",
			email: "user2@email.com",
		},
		{
			name: "User3",
			email: "user3@email.com",
		}
	]);

  await Box.bulkCreate([
    {
      type: "Variety",
      description: "A mix of many different types of chocolates",
      rating: 9
    },
    {
      type: "Milk",
      description: "A selection of fine milk chocolates",
      rating: 10
    },
    {
      type: "Dark",
      description: "High cacao content from around the world",
      rating: 8
    }
  ])

  await Chocolate.bulkCreate([
    {
      title: "Milk Block"
    },
    {
      title: "Praline",
      description: "Milk chocolate with hazelnut filling"
    },
    {
      title: "White Truffle",
      description: "A milky, white chocolate truffle with a smooth centre"
    },
    {
      title: "Dark Truffle",
      description: "A rich, dark truffle with a smooth centre"
    },
    {
      title: "Caramel Crunch",
      description: "Milk chocolate with crunchy pieces on the outside and smooth caramel on the inside"
    },

  ])


}

module.exports = seed()