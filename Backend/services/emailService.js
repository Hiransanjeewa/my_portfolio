const express = require('express')
const Email = require("../models/Emails");

async function emailSender(email){
    const emails = await Email.find()
    //   console.log(emails)
    const emailCount = Object.keys(emails).length

    for (let i = 0; i < emailCount; i++) {
        if (emails[i].email === email) {
            // Add time constraint here .
            // If time is not applicable then return "Only one message per day allowed"
        }
    }
    return 1;
}

module.exports = {emailSender};