import dotenv from "dotenv"
dotenv.config({
    path : "../.env"
})
import connectDB from "./db/index.js";
import { app } from "./app.js";

const port  = process.env.PORT || 1234

connectDB()
.then(()=>{
    app.listen(port , ()=>{
        console.log(`server is connected at port ${port}`)
    })
})
.catch((err)=>{
    console.log("db m h error !!" ,err);
    
})