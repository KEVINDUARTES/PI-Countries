const { Router } = require("express");
const axios = require("axios");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Country, Activity } = require("../db");
const router = Router();
const { getAllCountries } = require("../Controller/getCountries.js");

router.get("/", async (req, res) => {
  // cuando selecciono me va filtrar el nombre que busco , y si no esta me larga un mensaje
  try {
    const { name } = req.query; //req busca si hay un name por query

    let countriesTotal = await getAllCountries();

    if (name != undefined) {
      //si hay un nombre que me pasa por query hjago esto
      //llamo la funcion de arribba que me trae todos los country
      let countryName = await countriesTotal.filter((el) =>
        el.name.toLowerCase().includes(name.toLowerCase())
      );
      countryName.length
        ? res.status(200).send(countryName) //sino
        : res.status(404).send("No existe country");
    } else if (countriesTotal) {
      res.status(200).send(countriesTotal);
    }
  } catch (e) {
    res.status(404).send("Error");
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id; //me traigo id de params
  // const countriesTotal = await getAllCountries()
  if (id) {
    const findID = await Country.findOne({
      where: { id },
      include: Activity,
    });

    findID
      ? res.status(200).json(findID)
      : res.status(404).send("No encontre ese pais");
    //  let countryId = await countriesTotal.filter(el => el.id ==id)//dentro de todos los pñaises filtrame el de id que te pase
    // countryId.length?
    // res.status(200).json(countryId) :
    // res.status(404).send('No encontre ese pais')
  }
});

module.exports = router;
