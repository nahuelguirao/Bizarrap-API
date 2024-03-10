import { Link } from 'react-router-dom'

export function Footer() {
    return (
        <footer>
            <h4>© Nahuel Guirao 2024 </h4>
            <Link to={"/docs"} className='docLink'>Read docs</Link>
        </footer >
    )
}