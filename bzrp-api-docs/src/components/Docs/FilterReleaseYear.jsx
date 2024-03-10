import { Link } from "react-router-dom"

export function FilterReleaseYear() {
    return (
        <main className="docsMain">
            <h1>Filter by release year</h1>
            <h3 className="marginTop50px">
                <span className="getTag filterSpan">FILTER</span> QUERY by release_year
            </h3>
            <p className="paragraphNote">*Valid years are between 2019 and 2024</p>
            <p className="paragraphNote">*Note you can mix release year filter with shot_by filter</p>
            <div className="urlContainer">
                <h4>Freestyle example</h4>
                <p>URL <span className="urlLink">https://bizarrap-api-production.up.railway.app/sessions/freestyle<span className="redSpan">?year=2019</span></span></p>
            </div>
            <div className="urlContainer">
                <h4>Music session example</h4>
                <p>URL <span className="urlLink">https://bizarrap-api-production.up.railway.app/sessions/music<span className="redSpan">?year=2023</span></span></p>
            </div>
            <div className="docsMainLinkContainer">
                <Link to={"/docs/freestyle-sessions"} className="docLink">Prev: Freestyle sessions</Link>
                <Link to={"/docs/filter/shot-by"} className="docLink">Next: Filter by shot_by</Link>
            </div>
        </main>
    )
}