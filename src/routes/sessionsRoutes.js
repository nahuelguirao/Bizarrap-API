import { Router } from "express";
import Session from '../models/sessionSchema.js'

const router = Router()

//GET ALL SESSIONS
router.get('/', async (req, res) => {
    try {
        const sessions = await Session.find()
        res.json(sessions)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//GET SPECIFIC SESSION
router.get('/:sessionNumber', async (req, res) => {
    const sessionNumber = req.params.sessionNumber

    if (sessionNumber == 42) {
        res.status(404).json({ message: "Session #42 doesn't exist yet." })
        return
    }

    try {
        const sessionFind = await Session.find({ session_number: sessionNumber })

        if (sessionFind.length != 0) {
            res.json(sessionFind)
            return
        }

        res.status(404).json({ message: 'Session not found, last updated was session #58.' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//create
router.post('/', async (req, res) => {
    const newSessionData = await req.body

    try {
        const newSession = await Session.create(newSessionData)
        res.status(201).json(newSession)
    } catch (error) {
        res.status(500).json({ message: e.message })
    }
})

export default router