import { MusicSession } from "../../models/sessionSchema.js";

//ALL
export async function getAllMusicSessions(req, res) {
    try {
        let query = {};

        // Query filters
        const queryYear = req.query.year;
        const queryShot = req.query.shot;

        if (queryYear) {
            if (queryYear < 2019 || queryYear > 2024) {
                res.status(400).json({ message: 'Year query must be between 2019 and 2024' })
                return
            }
            query.release_year = queryYear;
        }

        if (queryShot) {
            query.shot_by = queryShot;
        }

        const sessions = await MusicSession.find(query);
        res.json(sessions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//SPECIFIC
export async function getSpecificMusicSession(req, res) {
    const sessionNumber = req.params.sessionNumber

    if (sessionNumber == 42) {
        res.status(404).json({ message: "Session #42 doesn't exist yet." })
        return
    }

    try {
        const sessionFind = await MusicSession.find({ session_number: sessionNumber })

        if (sessionFind.length > 0) {
            res.json(sessionFind)
            return
        }

        res.status(404).json({ message: 'Session not found, last updated was session #58.' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}