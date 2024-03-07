import express from "express";
import { config } from "dotenv";
import cors from 'cors'
import mongoose from "mongoose";
import musicRouter from './routes/sessionsRoutes.js'
import freeStyleRouter from "./routes/freeStyleRoutes.js";

config()

const app = express()

//Middleware/s
app.use(express.json())
app.use(cors())

//Mongo Connection
mongoose.connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB_NAME })
const db = mongoose.connection

//Uses session router
app.use('/sessions/music', musicRouter)

//Uses freestyle session router
app.use('/sessions/freestyle', freeStyleRouter)

//Listening
const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})