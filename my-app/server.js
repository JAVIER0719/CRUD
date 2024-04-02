require ('dotenv').config();
const http = require('http')
const app = require('./index.js')

//create the port when running
const server = http.createServer(app)


//running 
server.listen(process.env.PORT, ()=>{
console.log(`http://localhost:${process.env.PORT}`)
})



