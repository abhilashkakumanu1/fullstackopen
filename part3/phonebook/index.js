const express = require("express");
const app = express();

app.use(express.json());

let notes = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "39-23-6423122",
  },
];

app.get("/api/persons", (req, res) => {
  res.json(notes);
});

app.get("/api/info", (req, res) => {
  res.send(
    `<p>Phonebook has info for ${notes.length} people</p><p>${new Date()}</p>`
  );
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const note = notes.find((note) => note.id === id);

  if (note) {
    res.json(note);
  } else {
    res.status(404).end();
  }
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  notes = notes.filter((note) => note.id !== id);

  res.status(204).end();
});

app.post("/api/persons", (req, res) => {
  const body = req.body;

  const generateId = () => {
    return Math.floor(Math.random() * 100000);
  };

  if (!body.name) {
    return res.status(400).json({ error: "name is missing" });
  } else if (!body.number) {
    return res.status(400).json({ error: "number is missing" });
  } else if (notes.find((note) => note.name === body.name)) {
    return res.status(400).json({ error: "name must be unique" });
  }

  const note = {
    ...body,
    id: generateId(),
  };

  notes = notes.concat(note);

  res.json(note);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server started and listening to port ${PORT}`);
});
