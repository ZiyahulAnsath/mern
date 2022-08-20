const express = require ("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());


// Declaring models
const userRouter = require("./routes/users");



// Declaring router file
app.use("/users",userRouter);



app.listen(5500, ()=>{
    console.log("Server is Started on 5500");
});

mongoose.connect('mongodb://localhost:27017/Practice_2',(err) =>{
    if(!err ){
        console.log("DB connection Sucessfully Established..!");
    }
})