const express = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = express.Router();

const { Country, Actividad } = require("../db.js");

router.use(express.json());

router.post("/", async (req, res) => {
  try {
    const { nombre, dificultad, duracion, temporada, countries } = req.body;//ME TRAIGO POR BODY LO QUE NECESITO PARA CREAR
    const newActivity = await Actividad.create({
      nambre: nombre,
      dificultad: dificultad,
      duracion: duracion,
      temporada: temporada,
    });
    countries?.map(async (countryId) => {
      const Countrydb = await Country.findAll({
        where: { name: countryId },
      });
      newActivity.addCountries(Countrydb);//aca le agrego(me traigo de la tabla) el paies que coincidio con el nombre.
    });
    res.status(201).json({ msg: "Actividad creada correctamente" });
  } catch (e) {
    console.log(e);
    res.status(400).json({
      error: "CREAR_ERROR_DE_ACTIVIDAD",
      description: "Error al crear la actividad",
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const actividades = await Actividad.findAll({
      include: { models: Country, atributos: ["id", "nombre"] },
    });
    res.json(actividades);
  } catch (e) {
    console.log(" get error " + e);
    res.json({ error: "No hay una actividad creada" });
  }
});

module.exports = router;