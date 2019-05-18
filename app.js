const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(express.static('./public'))
app.use(bodyParser.urlencoded({extended: false}))

const router = require('./routes/otp')
app.use(router)

app.get('/', (req, res)=>{
    // const ran = Math.floor(Math.random() * 100000) + 1;
    // console.log(ran);
    console.log('responding to root route');
    res.send('Your NodeJS is Connnected ');
})

app.listen(1111, ()=>{
    console.log('server is running on port 1111');
})