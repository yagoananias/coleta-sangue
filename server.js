const express = require("express")
const server = express()

server.use(express.static('public'))

server.use(express.urlencoded({extended:true}))

const nunjucks = require("nunjucks")
nunjucks.configure("./", { 
  express: server,
  noCache: true,
})

const donors = [
  {
    name: "Yago Lima",
    blood: "O+"
  },
  {
    name: "Andressa Lima",
    blood: "A+"
  },
  {
    name: "Bernardo Lima",
    blood: "A+"
  },
  {
    name: "Ana Rosa",
    blood: "AB+"
  },
]

server.get("/", function (require, response) {
  return response.render("index.html", { donors })
})

server.post("/", function(require, response) {
  const name = require.body.name
  const email = require.body.email
  const blood = require.body.blood

  donors.push({
    name: name,
    blood: blood,
  })

  return response.redirect("/")
})

server.listen(3000)