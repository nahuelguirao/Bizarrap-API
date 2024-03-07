import { FreeStyleSession } from "../../models/sessionSchema.js";

//ALL
export async function getFreeStyleSessions(req, res) {
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

        const sessions = await FreeStyleSession.find(query);
        res.json(sessions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//SPECIFIC
export async function getSpecificFreeStyleSession(req, res) {
    const paramNumber = req.params.sessionNumber

    if (paramNumber > 8) {
        res.status(404).json({ message: 'Last update was freestyle session #8.' })
        return
    }

    try {
        const session = await FreeStyleSession.find({ session_number: paramNumber })

        if (session.length == 0) {
            res.status(404).json({ message: 'Session not found.' })
            return
        }

        res.json(session)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}