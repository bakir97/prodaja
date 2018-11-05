const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Korisnik = mongoose.model("korisnik");
const passport = require("passport");
const bcrypt = require("bcryptjs");
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    if (req.user.isOwner) {
      const korisnikUsername = await Korisnik.findOne({
        username: req.body.username
      });
      const errors = {};
      if (korisnikUsername) {
        errors.username = "Username vec postoji";
      }
      if (Object.keys(errors).length > 0) {
        return res.status(400).json(errors);
      }
      const podaci = {};
      podaci.username = req.body.username;
      podaci.email = req.body.email;
      if (req.body.isOwner) podaci.isOwner = req.body.isOwner;
      if (req.body.isAdmin) podaci.isAdmin = req.body.isAdmin;
      const salt = await bcrypt.genSalt();
      const hashPassword = await bcrypt.hash(req.body.password, salt);
      podaci.password = hashPassword;
      const noviKorisnik = await new Korisnik(podaci);
      noviKorisnik.save();
      return res.status(200).json(noviKorisnik);
    }
    return res.status(404).json({ msg: "U are not the Owner" });
  }
);

module.exports = router;
