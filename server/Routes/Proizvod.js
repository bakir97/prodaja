const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require("mongoose");
const Proizvod = mongoose.model("proizvod");
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      podaci = {};
      podaci.naslov = req.body.naslov;
      podaci.opis = req.body.opis;
      podaci.slike = req.body.slike;
      podaci.tezina = req.body.tezina;
      podaci.cijena = req.body.cijena;
      podaci.kategorija = req.body.kategorija;
      if (req.body.id) {
        const proizvod = await Proizvod.findOneAndUpdate(
          { _id: req.body.id },
          { $set: podaci },
          { new: true }
        );
        if (!proizvod) {
          return res
            .status(500)
            .json({ msg: "Something went wrong with edit proizvod" });
        }
        return res.json(proizvod);
      }
      const noviProizvod = await new Proizvod(podaci);
      await noviProizvod.save();
      res.json(noviProizvod);
    } catch (error) {
      res.status(500).json({ msg: "error" });
    }
  }
);
router.post("/get", async (req, res) => {
  const filter = {};
  if (req.body.search)
    filter.naslov = new RegExp(`.*${req.body.search}.*`, "i");
  if (req.body.kategorija) filter.kategorija = req.body.kategorija;
  if (req.body.maxCijena) {
    filter.cijena = {};
    filter.cijena["$lte"] = req.body.maxCijena;
  }
  if (req.body.minCijena) {
    filter.cijena = {};
    filter.cijena["$gte"] = req.body.minCijena;
  }
  if (req.body.maxTezina) {
    filter.tezina = {};
    filter.tezina["$lte"] = req.body.maxTezina;
  }
  if (req.body.minTezina) {
    if (filter.tezina) {
      filter.tezina["$gte"] = req.body.minTezina;
    } else {
      filter.tezina = {};
      filter.tezina["$gte"] = req.body.minTezina;
    }
  }
  const proizvodi = await Proizvod.find(filter).sort("-createdAt");

  return res.json(proizvodi);
});

router.get("/:id", async (req, res) => {
  const proizvod = await Proizvod.findById(req.params.id);
  if (!proizvod) {
    return res.status(400).json({ msg: "No Proizvod with that id" });
  }
  return res.json(proizvod);
});
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const proizvod = await Proizvod.findByIdAndRemove(req.params.id);
    if (!proizvod) {
      return res.status(400).json({ msg: "No Proizvod with that id" });
    }
    return res.json(proizvod);
  }
);
module.exports = router;
