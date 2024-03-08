import mongoose from "mongoose";
import { config } from 'dotenv';


config({
    path: "../config.env"
})

// database connection
export const mongoDB = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log("MongoDb database is connected!");
    })
    .catch((error) => {
        console.log(error);
    });
}