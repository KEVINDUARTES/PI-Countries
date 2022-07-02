const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define('activity', {
    id :{
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true,
    },
    nombre:{
      type: DataTypes.STRING,
     
    },
    dificultad :{
      type: DataTypes.INTEGER,   //(Entre 1 y 5)
     
    },                                            
    duracion: {
      type: DataTypes.INTEGER,
    
    },
    temporada:{
      type: DataTypes.STRING,    //(Verano, Otoño, Invierno o Primavera)
      
    }, 
    
    
  });
};