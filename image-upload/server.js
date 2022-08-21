const express = require("express");
const app = express();

const hbs = require("express-handlebars");
const path = require("path");

app.use(express.json());

// serving static files
app.use(express.static(path.join(__dirname, "public")));

// connect mongodb database
// require('./server/database/database')();

// setup view engine
app.set("view engine", "hbs");
app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultView: "default",
    layoutsDir: path.join(__dirname, "views"),
    partialsDir: path.join(__dirname, "views/partials"),
  })
);
// Route before router.js

// app.get("/", (req, res) => {
//   res.render("main");
// });

// calling routes

app.use("/", require("./server/router/router"));

app.listen(4000, () =>
  console.log(`Server is started on http://localhost:4000`)
);
