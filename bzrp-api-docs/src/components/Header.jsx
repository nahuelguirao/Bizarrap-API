import { Link, useLocation } from "react-router-dom";

export function Header() {

    const location = useLocation()

    return (
        <header className="header">
            <h1>BzrpAPI</h1>
            {location.pathname.includes("docs") ?
                <Link to={"/"}>Home</Link>
                :
                <Link to={"/docs"}>Docs</Link>
            }
        </header>
    )
}