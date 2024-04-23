const express = require("express");
const colors = require('colors')
require("dotenv").config();
const port = process.env.PORT || 5000;

//Qraphql imports
var { createHandler } = require("graphql-http/lib/use/express")
var { buildSchema } = require("graphql")
var { ruruHTML } = require("ruru/server")

const schema = require('./schema/schema')
const connectDB  = require('./config/db')

const app = express();

app.all(
  "/graphql",
  createHandler({
    schema: schema,
  })
)

app.get("/", (_req, res) => {
  res.type("html")
  res.end(ruruHTML({ endpoint: "/graphql" }))
})

app.listen(port, console.log(`server running on port ${port}`))
