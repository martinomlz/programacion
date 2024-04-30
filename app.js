const express = require('express');
const dbconnect = require('./database');
const modeluser = require('./Usuarios');
const app = express();

const router= express.Router();

router.post("/", async (req,res)=> {
    const body = req.body;
    const respue = await modeluser.create(body);
    res.send(respue)

 })


router.get("/",async(req,res) =>{
    const respue= await modeluser.find({})
    res.send(respue)
})

router.get("/:id",async(req,res) =>{
    const id=req.params.id;
    const buscar= await modeluser.findById(id)
    res.send(buscar)
})

router.put("/:id",async(req,res) =>{
    const body= req.body;
    const id=req.params.id;
    const actualizar= await modeluser.findOneAndUpdate({ _id: id }, body)
    res.send(actualizar)
})

router.delete("/:id",async(req,res) =>{
    const id=req.params.id;
    const eliminar= await modeluser.deleteOne( { _id : id })
    res.send(eliminar)
})


app.use(express.json())
app.use(router)
app.listen(3001,() =>{
 console.log("el servidor esta conectado en el puerto 3001");
})
dbconnect();
