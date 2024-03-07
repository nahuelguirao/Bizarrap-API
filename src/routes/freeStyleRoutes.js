import { Router } from "express";
import { getFreeStyleSessions, getSpecificFreeStyleSession } from "./controllers/freeStyleControllers.js";

const freeStyleRouter = Router()

//GET ALL
freeStyleRouter.get('/', getFreeStyleSessions);

//GET ONE
freeStyleRouter.get('/:sessionNumber', getSpecificFreeStyleSession)

export default freeStyleRouter