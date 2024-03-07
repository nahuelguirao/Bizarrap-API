import { Schema, model } from "mongoose";

const sessionSchema = new Schema({
    session_number: Number,
    official_title: String,
    youtube_link: String,
    artist: String,
    shot_by: String,
    release_date: String,
    poster: String
})

const Session = model("Song", sessionSchema)

export default Session