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
                return 'email_declined';
            }
       }
    }
    return 'email_accepted';
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

            emailValidation= await validateEmail(email.email)

            if (emailValidation === 'email_accepted') {
                const Emails = await email.save()

                return  emailValidation;
            } else if (emailValidation === 'email_declined') {

                return  emailValidation;
            } else {

                return  emailValidation;
            }


    } catch (e) {
      return "Error " + e;
    }


}


module.exports = {sendEmail};