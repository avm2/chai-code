const express =require('express');
require('dotenv').config();
const app = express();
const port= process.env.PORT;

app.get('/',(req,res)=>{
    res.send('Hello world!')
})


app.get('/twitter',(req,res)=>{
    res.send('Hey Aman!')
})

app.listen(port,()=>{
    console.log(`Example app listing on port ${port}`);
})