const mongoose = require('mongoose');
const url = "mongodb+srv://hiransanjeewaa:hiran12345@cluster.nh7evee.mongodb.net/my_portfolio";



mongoose.connect(url).then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});
