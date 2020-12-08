const mongoose = require("mongoose");
const { Schema } = mongoose;
if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.argv[2];
const url = `mongodb+srv://Abhi:${password}@cluster0.vkpce.mongodb.net/phonebook?retryWrites=true&w=majority`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const noteSchema = new Schema({ name: String, number: String });
const Note = mongoose.model("Note", noteSchema);

if (process.argv.length === 3) {
  console.log("phonebook:");
  Note.find({}).then((res) => {
    res.forEach((note) => console.log(`${note.name} ${note.number}`));
    mongoose.connection.close();
  });
} else {
  const note = new Note({
    name: process.argv[3],
    number: process.argv[4],
  });
  note.save().then((res) => {
    console.log(`added ${res.name} ${res.number} to phonebook`);
    mongoose.connection.close();
  });
}
