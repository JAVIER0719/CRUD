
const mysql= require('mysql')
require('dotenv').config('')


var connection = mysql.createConnection({
    port:process.env.SERVER,
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASS,
    database:process.env.DB

})

connection.connect((err)=>{
    if(!err){
        console.log('connect')
    }else{
        console.log('warning', err)
    }
})


module.exports= connection
