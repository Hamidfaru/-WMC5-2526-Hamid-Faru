console.log("Hallo Node.js!");
// math.js
function add(a, b) {
  return a + b;
}

module.exports = add;

// app.js
const add = require("./math");
console.log(add(2, 3));

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hallo Express!");
});

app.listen(3000, () => {
  console.log("Server läuft auf http://localhost:3000");
});


//Routen (Routes)
app.get("/users", (req, res) => {
  res.json(["Anna", "Tom", "Max"]);
});

app.post("/users", (req, res) => {
  res.send("User erstellt");
});


//Request & Response
app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  res.send(`User-ID: ${id}`);
});


//Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});


//Einfaches API-Beispiel
app.get("/api/status", (req, res) => {
  res.json({
    status: "ok",
    uptime: process.uptime()
  });
});

