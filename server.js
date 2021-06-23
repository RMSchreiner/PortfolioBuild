

if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}


const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require("./routes/index")
const reportbugRouter = require("./routes/reportbug")
const projectoneRouter = require("./routes/projectone")
const projecttwoRouter = require("./routes/projecttwo")
const projectthreeRouter = require("./routes/projectthree")
const projectfourRouter = require("./routes/projectfour")


app.set("view engine", "ejs"); //sets view engine
app.set("views", __dirname + "/views"); //where the ejs views are found
app.set('layout', 'layouts/layout'); //tells express where the layout file is
app.use(expressLayouts); //tells express to use layouts
app.use(express.static(__dirname + '/public')); //this lets express know where to find the css file
 
const mongoose = require ('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser:true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', error => console.error)
db.once('open', () => console.log('Connected to Mongoose'))

app.use("/", indexRouter)
app.get("/reportbug", reportbugRouter)
app.get("/projectone", projectoneRouter)
app.get("/projecttwo", projecttwoRouter)
app.get("/projectthree", projectthreeRouter)
app.get("/projectfour", projectfourRouter)







app.listen(process.env.PORT || 3000, () => {
    console.log("App listening on port 3000")
});
