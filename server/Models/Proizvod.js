const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const proizvod = new Schema(
  {
    naslov: { type: String, required: true },
    opis: { type: String, required: true },
    kategorija: { type: String, required: true },
    tezina: { type: Number, required: true },
    cijena: { type: Number, required: true },
    slike: []
  },
  { timestamps: true }
);
mongoose.model("proizvod", proizvod);
