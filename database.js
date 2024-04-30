const mongoose = require('mongoose');
const dbconnect = async () => {
    mongoose.set('strictQuery', true);
    try {
      await mongoose.connect("mongodb://localhost:27017/usuario");
      console.log("Conexión correcta!");
    } catch (error) {
      console.error("Error de conexión:", error);
    }
  };
  

module.exports = dbconnect;