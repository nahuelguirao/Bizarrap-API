import { Link } from "react-router-dom"

export function FreeStyleSessions() {
    return (
        <main className="docsMain">
            <h1>Freestyle sessions</h1>
            <h3 className="marginTop50px">
                <span className="getTag">GET</span> ALL Freestyle Sessions
            </h3>
            <p className="paragraphNote">*If all is ok it will return and array of sessions</p>
            <div className="urlContainer">
                <p>URL <span className="urlLink">https://bizarrap-api.vercel.app/sessions/freestyle</span></p>
            </div>
            <h3 className="marginTop50px">
                <span className="getTag">GET</span> SPECIFIC Freestyle Sessions
            </h3>
            <p className="paragraphNote">*If all is ok it will return a session</p>
            <div className="urlContainer">
                <p>URL <span className="urlLink">https://bizarrap-api.vercel.app/sessions/freestyle/<span className="redSpan">$sessionNumber</span></span></p>
            </div>
            <div className="docsMainLinkContainer">
                <Link to={"/docs/music-sessions"} className="docLink">Prev: Music sessions</Link>
                <Link to={"/docs/filter/release-year"} className="docLink">Next: Filter by release_year</Link>
            </div>
        </main>
    )
}