import { Link } from "react-router-dom";
import { SessionFormat } from "../CodeExamples/SessionFormat";

export function Welcome() {
    return (
        <main className="docsMain">
            <h1>Welcome to Bizarrap API!</h1>
            <p>Please note that both, music session and freestyle session are returned in this format: </p>
            <SessionFormat />
            <p className="paragraphNote">*Artist and shot_by are instagram username </p>
            <p className="paragraphNote">*Youtube_link is a direct link to session video</p>
            <p className="paragraphNote">*Poster is an img link</p>
            <Link to={"/docs/music-sessions"} className="docLink nextPage">
                Next: Music sessions
            </Link>
        </main>
    )
}