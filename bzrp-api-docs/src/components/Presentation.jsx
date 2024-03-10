import { IoMdGlasses } from "react-icons/io";

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
                    <p>*Created using Express + Mongo DB</p>
                </section>
                <section className="mainSectionButtons">
                    <button>Music sessions examples</button>
                    <button>Freestyle sessions examples</button>
                </section>
            </section>
            <img src="/bzrp.jpg" className="bzrpImg" alt="Bizarrap image" />
        </main>
    )
}