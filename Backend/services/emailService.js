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
            if (emails[i].date===date){
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
        let response;
        (async () => {
            emailValidation= await validateEmail(email.email)
        })().then(async r => {

            if (emailValidation === 1) {
                const Emails = await email.save()

                response= emailValidation;
            } else if (emailValidation === 0) {

                response= emailValidation
            } else {

                response= "Error"
            }
        })
    } catch (e) {
      var  response= "Error " + e;
    }
    return=response



}



module.exports = {sendEmail};