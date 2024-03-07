import express from "express";
import { config } from "dotenv";
import cors from 'cors'
import mongoose from "mongoose";
import router from './routes/sessionsRoutes.js'

config()

const app = express()

//Middleware/s
app.use(express.json())
app.use(cors())

//Mongo Connection
mongoose.connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB_NAME })
const db = mongoose.connection

//Uses session router
app.use('/sessions', router)

//Listening
const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})