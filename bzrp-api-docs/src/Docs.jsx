import { Link, Route, Routes } from "react-router-dom";
import { Welcome } from "./components/Docs/Welcome";
import { MusicSessions } from "./components/Docs/MusicSessions";
import { FreeStyleSessions } from "./components/Docs/FreeStyleSessions";
import { FilterShotBy } from "./components/Docs/FilterShotBy";
import { FilterReleaseYear } from "./components/Docs/FilterReleaseYear";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";
import './style/docsLayout.css'


export function Docs() {
    const [isOpen, setIsOpen] = useState(false)
    const handleIndex = () => setIsOpen(!isOpen)

    const isMobile = window.innerWidth <= 950

    useEffect(() => {
        !isMobile && setIsOpen(true)
    }, [])

    return (
        <main className="docsLayout">
            <aside>
                <h3>Index {isOpen ? <IoIosArrowUp onClick={handleIndex} /> : <IoIosArrowDown onClick={handleIndex} />}</h3>
                <nav className="docsIndex" style={isOpen ? { display: "flex" } : { display: "none" }}>
                    <Link to={"/docs/"} onClick={isMobile && handleIndex}>-Start</Link>
                    <Link to={"/docs/music-sessions"} onClick={isMobile && handleIndex}>-Music sessions</Link>
                    <Link to={"/docs/freestyle-sessions"} onClick={isMobile && handleIndex}>-FreeStyle sessions</Link>
                    <Link to={"/docs/filter/release-year"} onClick={isMobile && handleIndex}>-Filter by release_year</Link>
                    <Link to={"/docs/filter/shot-by"} onClick={isMobile && handleIndex}>-Filter by shot_by</Link>
                </nav>
            </aside>
            <section>
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/music-sessions" element={<MusicSessions />} />
                    <Route path="/freestyle-sessions" element={<FreeStyleSessions />} />
                    <Route path="/filter/release-year" element={<FilterReleaseYear />} />
                    <Route path="/filter/shot-by" element={<FilterShotBy />} />
                </Routes>
            </section>
        </main>
    )
}