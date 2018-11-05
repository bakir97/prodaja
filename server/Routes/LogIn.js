const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Korisnik = mongoose.model("korisnik");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
router.post("/", async (req, res) => {
  console.log(req.body);

  const korisnik = await Korisnik.findOne({ username: req.body.username });
  if (!korisnik) {
    return res.status(400).json({ username: "Username ne postoji" });
  }
  const bcrypt = require("bcryptjs");
  const korisnikPassword = await bcrypt.compare(
    req.body.password,
    korisnik.password
  );
  if (!korisnikPassword) {
    return res.status(400).json({ password: "Password nije tacan" });
  }
  const podaci = {};
  podaci.username = korisnik.username;
  podaci.id = korisnik._id;
  podaci.email = korisnik.email;
  podaci.isAdmin = korisnik.isAdmin;
  podaci.isOwner = korisnik.isOwner;
  jwt.sign(podaci, keys.jwtKey, (err, token) => {
    return res.json({
      token: "Bearer " + token,
      podaci
    });
  });
});
module.exports = router;
