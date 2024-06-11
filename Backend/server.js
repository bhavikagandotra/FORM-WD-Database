const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'form'
})

app.post('/form',(req,res)=>{
    const sql = "INSERT INTO login('name' , 'email' , 'password' , 'address' , 'phone') Values(?)";
    const values =[
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.address,
        req.body.phone,
    ]
    db.query(sql,[values] , (err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8081,()=>{
    console.log("listening");
})