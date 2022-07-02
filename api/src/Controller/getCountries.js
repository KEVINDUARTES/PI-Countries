const axios = require ('axios');
const {Country, Activity }= require('../../db');

const getApiInfo = async () => {
    const apiUrl = await axios.get("https://restcountries.com/v3/all");

const apiInfo= await apiUrl.data.map(el =>{
    return{
        id: el.cca3,
        nombre: el.nombre,
        bandera: el.bandra ,
        continente: el.continente,
        capital: el.capital ? el.capital[0] : 'Capital no encontrada',
        subregion: el.subregion ? el.subregion : 'Subregion no encontrado',
        area: el.area,
        poblacion: el.poblacion,
    };
});
return apiInfo;//retorno la info que le pedi

};
const getDbInfo = async () => {
    return await Country.findAll({
        include: {
            model: Activity,
            atributos: ["nombre", "dificultad", "duracion", "temporada"],
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