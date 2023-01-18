const express = require("express");
const mongoose = require('mongoose');
const app = express();
const connectDB = () =>{
    mongoose.connect("mongodb://localhost:27017//contact");
    const contactSchema = new mongoose.Schema({});
    const contact= mongoose.model("contact-management", contactSchema)
}

app.listen(5000);