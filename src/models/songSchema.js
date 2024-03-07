import { Schema } from "mongoose";

export const Song = new Schema({
    session_number: Number,
    official_title: String,
    youtube_link: String,
    artist: String,
    shot_by: String,
    release_date: String
})
