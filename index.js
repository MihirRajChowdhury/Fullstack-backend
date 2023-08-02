const express = require("express")
const routes = require("./routes/todoRoutes")
const mongoose = require("mongoose")
require("dotenv").config()
const cors = require("cors")

const app = express()
const PORT = process.env.port || 5000
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))

mongoose
.connect(process.env.MONGODB_URL)
.then(()=>console.log("Connected to MongoDB"))
.catch((err)=>console.log(err))

app.use(routes)




app.listen(PORT,()=>{
    console.log("App started successfully");
})