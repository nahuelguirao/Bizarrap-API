import { Link } from "react-router-dom";

export function MusicSessions() {
    return (
        <main className="docsMain">
            <h1>Music sessions</h1>
            <h3 className="marginTop50px">
                <span className="getTag">GET</span> ALL Music Sessions
            </h3>
            <p className="paragraphNote">*If all is ok it will return and array of sessions</p>
            <div className="urlContainer">
                <p>URL <span className="urlLink">http://localhost:3000/sessions/music</span></p>
            </div>
            <h3 className="marginTop50px">
                <span className="getTag">GET</span> SPECIFIC Music Sessions
            </h3>
            <p className="paragraphNote">*If all is ok it will return a session</p>
            <p className="paragraphNote">*Last update was session #58</p>
            <p className="paragraphNote">*Session #42 does not exist yet</p>
            <p className="paragraphNote">*Session #17 has 2 results</p>
            <div className="urlContainer">
                <p>URL <span className="urlLink">http://localhost:3000/sessions/music/<span className="redSpan">$sessionNumber</span></span></p>
            </div>
            <div className="docsMainLinkContainer">
                <Link to={"/docs"} className="docLink">Prev: Start</Link>
                <Link to={"/docs/freestyle-sessions"} className="docLink">Next: Freestyle sessions</Link>
            </div>
        </main>
    )
}