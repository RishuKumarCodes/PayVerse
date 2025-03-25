import express from "express";
import userRouter from "./Routes/userRoutes.js"
import bankRouter from "./Routes/bankRoute.js"
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./Configs/db.js"

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3001;
connectDb();


//Middlewares
app.use(express.json());
app.use(cors());



//Routes
app.use('/api/bank',bankRouter);
app.use('/api/users',userRouter);



//Root is groot
app.get('/',(req,res)=>{
    res.send('Root is groot');
})


//Igniting the app
app.listen(PORT,()=>console.log(`App running on port ${PORT}`));