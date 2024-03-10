import { Link } from "react-router-dom"

export function FilterShotBy() {
    return (
        <main className="docsMain">
            <h1>Filter by shot by</h1>
            <h3 className="marginTop50px">
                <span className="getTag filterSpan">FILTER</span> QUERY by shot_by
            </h3>
            <p className="paragraphNote">*Valid options are: @gianlyfe, @GianGuaglianone, @lautarofuriolo, @pipes_ph, @salvidiaz and @pedro.colmeiro</p>
            <p className="paragraphNote">*Note you can mix shot_by filter with release_year filter</p>
            <div className="urlContainer">
                <h4>Freestyle example</h4>
                <p>URL <span className="urlLink">http://localhost:3000/sessions/freestyle<span className="redSpan">?shot=@GianGuaglianone</span></span></p>
            </div>
            <div className="urlContainer">
                <h4>Music session example</h4>
                <p>URL <span className="urlLink">http://localhost:3000/sessions/music<span className="redSpan">?shot=@pedro.colmeiro</span></span></p>
            </div>
            <div className="docsMainLinkContainer">
                <Link to={"/docs/filter/release-year"} className="docLink">Prev: Filter by release_year</Link>
            </div>
        </main>
    )
}