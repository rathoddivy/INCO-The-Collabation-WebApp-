
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;


const route = require('./Routs/AuthRouter')
const connectdb = require('./Database/Db')

app.use(cors());
app.use(express.json());
connectdb();

 app.get("/", (req, res) => {
    res.send(`Hello, Node.js Server is Running!  `);
 });

 app.get("/get", (req, res) => {
    res.send(`Hello, Node.js Server is on Get!  `);
 });


app.use('/' , route)





app.listen(PORT , ()=>{
    console.log(`Hello, Node.js Server is Running on !! ${PORT}  `)
})