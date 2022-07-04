const { Router } = require('express');
const axios = require("axios");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Country, Activity } = require('../db');
const router = Router();
const { getAllCountries } = require("../controllers/CountriesControl/getCountries.js")

router.get("/", async (req, res) =>{// cuando selecciono me va filtrar el nombvre que busco , y si no esta me larga un mensaje
    try{
   const {name} = req.query;//req busca si hay un name por query
       let countriesTotal = await getAllCountries();
        if (name){//si hay un nombre que me pasa por query hjago esto  
                                 //llamo la funcion de arribba que me trae todos los country
            let countryName = await countriesTotal.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
            countryName.length ?
            res.status(200).send(countryName) ://sino 
            res.status(404).send("No existent country")
        } else if(countriesTotal){
            res.status(200).send(countriesTotal)
        }
    }
    catch(e){res.status(404).send("No existent country")}
});

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const project = await Country.findByPk(id.toUpperCase(), {
            include:{ 
                model: Activity,
                attributes:["name", "difficulty", "duration", "season"],
                through: {
                    attributes: [],
                }
            }
        });
            project ?
            res.status(200).json(project) :
            res.status(404).send("nonexistent country")
    }
    catch (e) {res.status(404).send("nonexistent country")}
});

module.exports = router;