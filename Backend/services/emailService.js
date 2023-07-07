const express = require('express')
const Email = require("../models/Emails");

const nodemailer = require('nodemailer');



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

                const transporter = nodemailer.createTransport({
                    port: 465,               // true for 465, false for other ports
                    host: "smtp.gmail.com",
                    auth: {
                        user: 'portfoliohiransanjeewa@gmail.com',
                        pass: 'qclipffqmfktmqwm',
                    },
                    secure: true,
                });

                const mailData = {
                    from: 'portfoliohiransanjeewa@gmail.com',  // sender address
                    to: 'hiransanjeewaa@gmail.com',   // list of receivers
                    subject: "Email from "+email.name+" email: "+ email.email,
                    text: email.message,
                    html: 'Hey there! you have new email from ' +email.name +'</br> email : '+email.email
                    +' <br> message : '+email.message,
                };
                console.log(mailData)


                transporter.sendMail(mailData).then((info) => {
                    // return res.status(201).json(
                    //     {
                    //         msg: "Email sent",
                    //         info: info.messageId,
                    //         preview: nodemailer.getTestMessageUrl(info)
                    //     }
                    // )
                    console.log("mail sent")
                }).catch((err) => {
                         console.log(err)
                   // console.log("mail not sent")
                    }
                );


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