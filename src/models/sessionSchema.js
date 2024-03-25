import { Schema, model } from "mongoose";

const sessionSchema = new Schema({
    session_number: Number,
    official_title: String,
    youtube_link: String,
    artist: String,
    shot_by: String,
    release_date: String,
    release_year: Number,
    poster: String
})

export const MusicSession = model("Song", sessionSchema)

export const FreeStyleSession = model("FreeStyle", sessionSchema)


