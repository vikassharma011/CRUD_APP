import express from 'express';
import cors from "cors"
import dbconnect from "./db/dbconnect.js"
import router from "./routes/route.js"
// import User from "./db/userModel.js"
import Routes from './routes/route.js';


const app = express();
app.use(express.json());
app.use(cors());
app.use(Routes);







const Port = 8004;
app.listen(Port , ()=>{
    console.log("succesfully connected")
})

dbconnect();//connect from the mongodb database