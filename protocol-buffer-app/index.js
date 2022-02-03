const Schema = require("./users_pb")
const fs = require("fs")

const lamp = new Schema.User()
lamp.setId(1)
lamp.setName("lamp")
lamp.setSalary(550)

console.log(lamp.getName())

const rick = new Schema.User()
rick.setId(2)
rick.setName("rick")
rick.setSalary(350)

const geek = new Schema.User()
geek.setId(3)
geek.setName("geek")
geek.setSalary(250)

const users = new Schema.Users()
users.addUsers(lamp)
users.addUsers(rick)
users.addUsers(geek)

const bytes = users.serializeBinary()
console.log({ bytes })

fs.writeFileSync("usersBinary", bytes)

const users2 = Schema.Users.deserializeBinary(bytes)

console.log({ users2: users2.toString() })
