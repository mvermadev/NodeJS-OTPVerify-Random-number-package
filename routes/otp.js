const express = require('express')
const router = express.Router();
// const bodyParser = require('body-parser')
const nodemailer = require('nodemailer');
const rn = require('random-number');



const options = {
    min : 10000,
    max: 100000,
    integer : true
}
var ran = rn(options)
// var ran = setTimeout(()=>{
//     ran.value = rn(options)
// }, 10000)


router.post('/sendMail', (req, res)=>{

    const name = req.body.name;
    const email = req.body.email;
    
    // console.log(ran);
    function ChangeOTP(){
        setTimeout(()=>{
         return ran = rn(options);
        }, 50000);
    }
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
            user: 'YOUR_EMAIL',
            pass: 'YOUR_PASSWORD'
        }
    });
    
    const mailOptions ={
        from : 'YOUR_EMAIL',
        to: email, // receiver email
        subject: 'OTP',
        text: 'Hey '+ name +', Your OTP Verification is : ' + ran + ' for registration process.'
    }
    
 

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error);
        }else{
            console.log('EMail is sended ');
            res.end();
        } 
    })
    ChangeOTP();
    res.redirect('/next.html')
    res.end();
})

router.post('/sendOTP', (req, res)=>{
 const otp = req.body.otp;

     if(otp == ran){
         console.log('Succed')
         res.redirect('/succed.html')
     }
     else{
         console.log('Invalid OTP')
         res.redirect('/invalid.html')
     }
     res.end()
})

module.exports = router
