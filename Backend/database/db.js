const mongoose = require('mongoose');
const url = "mongodb://54.86.186.59:27017/my_portfolio";


mongoose.connect(url).then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});
