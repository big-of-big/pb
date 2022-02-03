const fs = require("fs")

const tarou = {
  id: 1,
  name: "tarou",
  salary: 300,
}

const zirou = {
  id: 2,
  name: "zirou",
  salary: 400,
}

const saburou = {
  id: 3,
  name: "saburou",
  salary: 500,
}

const users = [tarou, zirou, saburou]

fs.writeFileSync("data.json", JSON.stringify(users))
