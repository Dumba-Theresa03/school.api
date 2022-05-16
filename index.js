const express =require("express")
const morgan = require("morgan")
require("dotenv").config()
const connectDB = require("./config/connectDB")
const userRoute = require("./routes/userRoute")
const studentRoute = require("./routes/studentRoute")
const resultsRoute = require("./routes/resultsRoute")



connectDB()

const app = express()
//middlewares
app.use(express.json())
app.use(morgan("dev"))
app.use("/api/users", userRoute)
app.use("/api", studentRoute)
app.use("/api", resultsRoute)

 

const PORT = process.env.PORT||9000

//Home route
app.get("/", (req, res)=>{
    res.json("welcome to my student API")
})

app.listen(PORT, ()=>{
    console.log("Server is UP!!! : ", PORT)
})