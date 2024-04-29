const express = require ('express');
const app = express();
const path = require('path');
const dbconnect= require('./config');

//routes
//const routes=require('./routes/index.routes')
//app.use(routes)
app.use(require('./routes/index.routes'))

//static files
app.use(express.static(path.join(__dirname, '../public')))
//app.use((req,res)=>{
//    res.render('index.html')
//})

app.listen(3000,()=>{
    console.log('servidor a la espera de conexion')
})

dbconnect()