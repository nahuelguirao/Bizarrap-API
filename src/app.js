import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";

config()

const app = express()

app.use(express.json())

mongoose.connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB_NAME })
const db = mongoose.connection

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})