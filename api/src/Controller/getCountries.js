const axios = require("axios");
const { Country, Activity } = require("../db");
const { URL_COUNTRIES } = process.env;

const getApiInfo = async () => {
  const apiUrl = await axios.get(URL_COUNTRIES);
  //console.log("api-Url", apiUrl.data);
  const apiInfo = await apiUrl.data.map((el) => {
    //para que mapee la misma info de los modelos.crea un objeto con los mismos atributos del modelo
    // Country.findOrCreate({

    //   where:{
    //       id:el.cca3,
    //       name:el.name.common,
    //       image:el.flags[1],
    //       continent:el.region,
    //       capital:el.capital?el.capital[0]:'no se encontro capital',
    //       subregion:el.subregion?el.subregion:'no se encontró subregion',
    //       area:parseInt(el.area) ? parseInt(el.area) : 0,
    //       population:parseInt(el.population)?parseInt(el.population):0,

    //   }
    // })
    return {
      id: el.cca3,
      name: el.name.common,
      flag: el.flags[1],
      continent: el.continents[0],
      capital: el.capital ? el.capital[0] : "Capital no encontrada",
      subregion: el.subregion ? el.subregion : "Subregion no encontrado",
      area: el.area,
      population: el.population,
    };
  });
  //console.log("infoAPI", apiInfo)

  const dbCreate = await Country.bulkCreate(apiInfo);
  console.log("dbCreate", dbCreate);
  return dbCreate; //retorno la info que le pedi

  return apiInfo; //retorno la info que le pedi
};

const getDbInfo = async () => {
  return await Country.findAll({
    include: {
      model: Activity,
      attributes: ["name", "difficulty", "duration", "season"],
      through: {
        atributos: [],
      },
    },
  });
};
//console.log("infoDB", getApiInfo)

const getAllCountries = async () => {
  const apiInfo = await getDbInfo();
  console.log(apiInfo);
  if (apiInfo.length <= 0) {
    return await getApiInfo();
  } else {
    return apiInfo;
    // const infoTotal = apiInfo.concat(dbInfo);
  }
};
module.exports = {
  getAllCountries,
  // getDbInfo,
  //getApiInfo,
  //getActivity
};
