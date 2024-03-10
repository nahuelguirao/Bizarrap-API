import { IoMdGlasses } from "react-icons/io";
import { Link } from 'react-router-dom'

export function Presentation() {
    return (
        <main className="mainAllContainer">
            <section className="mainSectionAllContainer">
                <header>
                    <div className="mainHeaderDiv">
                        <h1>Bizarrap</h1>
                        <IoMdGlasses className="mainHeaderSpan" />
                        <h1>API</h1>
                    </div>
                </header>
                <section className="mainSection">
                    <h4>
                        <span className="importantWord">Free</span> API to get full information about Music and Freestyle sessions of <span className="importantWord">Bizarrap</span>.
                    </h4>
                    <p>*Created using Express + Mongo DB and deployed in Railway</p>
                </section>
                <section className="mainSectionButtons">
                    <Link to={"/docs/music-sessions"}><button>Music sessions examples</button></Link>
                    <Link to={"/docs/freestyle-sessions"}><button>Freestyle sessions examples</button></Link>
                </section>
            </section>
            <img src="/bzrp.jpg" className="bzrpImg" alt="Bizarrap image" />
        </main>
    )
}