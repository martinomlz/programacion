const mongoose = require ('mongoose')
const dbconnect = () => {
    mongoose.connect ("mongodb://localhost:27017/projecto" ,{}, (err,res) => {
        if (!err) {
            console.log("Conexion correcta")

        }
        else {
            console.log("Error de conexion")
        }
    }) 

    
}
module.exports = dbconnect