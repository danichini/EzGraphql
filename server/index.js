const express = require("express");
const colors = require("colors");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

//Qraphql imports
var { createHandler } = require("graphql-http/lib/use/express");
var { buildSchema } = require("graphql");
var { ruruHTML } = require("ruru/server");

const schema = require("./schema/schema");
const connectDB = require("./config/db");

const app = express();

// connect to database
connectDB();

app.use(cors());

app.all(
  "/graphql",
  createHandler({
    schema: schema,
    formatError(err) {
      if (err.originalError) {
        return err;
      }
      const data = err.originalError.data;
      const message = err.message || "error has occurred ";
      const code = err.originalError.code || 500;
      return { data, message, code };
    },
  })
);

app.get("/", (_req, res) => {
  res.type("html");
  res.end(ruruHTML({ endpoint: "/graphql" }));
});

app.listen(port, console.log(`server running on port ${port}`));
