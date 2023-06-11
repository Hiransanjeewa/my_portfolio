const express = require('express')
const Email = require("../models/Emails");

async function validateEmail(email){
    const emails = await Email.find()
    //   console.log(emails)
    const emailCount = Object.keys(emails).length

    for (let i = 0; i < emailCount; i++) {
        if (emails[i].email === email) {
            const time= Date.now()
            let date_ob = new Date(time);
            let date = date_ob.getDate();
            if (emails[i].date!==date){
                return 0;
            }
       }
    }
    return 1;
}

// function validateEmail(email){
//     try {
//         var emailResponce ;
//         (async () => {
//             emailResponce = await emailSender(email)
//         })().then(r => {
//
//         })
//         return emailResponce;
//     }catch (e) {
//         return 'Error ' + e
//     }
//
// }

async function sendEmail(requestBody) {
    const time = Date.now()
    let date_ob = new Date(time);
    let date = date_ob.getDate();

    const email = new Email({
        email: requestBody.email,
        name: requestBody.name,
        message: requestBody.message,
        date: date
    });
    // trying to store data in Database
    try {
        let emailValidation;
        (async () => {
            emailValidation= await validateEmail(email)
        })().then(r => {

        })
        if (emailValidation===1){
            const Emails = await email.save()
            return "Message Sent Successfully";
        }else if(emailValidation===0) {
            return "Only one message per day ! "
        }else {
            return "Error"
        }
    } catch (e) {
        return "Error " + e;
    }

}




module.exports = {sendEmail};