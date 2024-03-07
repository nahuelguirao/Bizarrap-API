import { Router } from "express";
import { getAllMusicSessions, getSpecificMusicSession } from "./controllers/musicControllers.js";

const musicRouter = Router()

//GET ALL SESSIONS
musicRouter.get('/', getAllMusicSessions)

//GET SPECIFIC SESSION
musicRouter.get('/:sessionNumber', getSpecificMusicSession)

export default musicRouter