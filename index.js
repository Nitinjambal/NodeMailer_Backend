import express from "express";
import userRoute from "./Routes/userRoute.js"
import { dataBase } from "./database/db.js";


const app = express();



//middleware
app.use(express.json())





//using routes
app.use("/users", userRoute);



//database connected
dataBase()

app.listen(8181, () => {
    console.log("server is running on port 8181")
})