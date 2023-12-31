import express from "express";
import dotenv, { config } from 'dotenv';
dotenv.config();
import connectDB from "./config/db.js";
import { notFound,errorHandler } from "./middleware/errorMiddleware.js";
import ProductRouters from "./routes/productRoutes.js";
const port = process.env.PORT || 5000;

connectDB(); //Connect to mongodb.

const app = express();

app.get('/' ,(req,res)=>{
    res.send("Api is running...")
});

app.use('/api/products',ProductRouters);

app.use(notFound);
app.use(errorHandler);

app.listen(port,()=>console.log(`Server running on port ${port}`))