const axios = require ('axios');
const {Country, Activity }= require('../../db');
const {URL_COUNTRIES}=process.env

const getApiInfo = async () => {
    const apiUrl = await axios.get(URL_COUNTRIES);
 console.log("api-Url", apiUrl);
const apiInfo= await apiUrl.data.map(el =>{
    return{
        id: el.cca3,
        name: el.name,
        flag: el.flag [1],
        continents: el.continents[0],
        capital: el.capital ? el.capital[0] : 'Capital no encontrada',
        subregion: el.subregion ? el.subregion : 'Subregion no encontrado',
        area: el.area,
        population: el.population,
    };
});

return apiInfo;//retorno la info que le pedi

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
    })
}



const getAllCountries = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal
 }

 module.exports={
    getAllCountries,
 }