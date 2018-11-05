const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Korisnik = new Schema(
  {
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    isOwner: {
      type: Boolean,
      default: false
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);
mongoose.model("korisnik", Korisnik);
