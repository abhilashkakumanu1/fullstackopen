require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const Person = require("./models/person");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("build"));

// Creating a custom token for POST object
morgan.token("post-obj", function getObj(req) {
  return JSON.stringify(req.body);
});

app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :post-obj"
  )
);

app.get("/api/persons", (req, res) => {
  Person.find({}).then((persons) => {
    res.json(persons);
  });
});

app.get("/api/info", (req, res) => {
  res.send(
    `<p>Phonebook has info for ${persons.length} people</p><p>${new Date()}</p>`
  );
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((person) => person.id === id);

  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter((person) => person.id !== id);

  res.status(204).end();
});

app.post("/api/persons", (req, res) => {
  const body = req.body;

  if (!body.name) {
    return res.status(400).json({ error: "name is missing" });
  } else if (!body.number) {
    return res.status(400).json({ error: "number is missing" });
  }
  //  else if (persons.find((person) => person.name === body.name)) {
  //   return res.status(400).json({ error: "name must be unique" });
  // }

  const person = new Person({ ...body });
  person
    .save()
    .then((savedPerson) => res.json(savedPerson))
    .catch((err) => console.error(err));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server started and listening to port ${PORT}`);
});
