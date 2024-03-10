import { GetAllFreestyle } from './CodeExamples/GetAllFreestyle'
import { GetAllMusic } from './CodeExamples/GetAllMusic'
import { SessionFormat } from './CodeExamples/SessionFormat'
import '../style/musicSessionsStyles.css'

export function PresentationCodes() {
    return (
        <>
            <section className="musicContainer">
                <h2 className='musicContainerQuickReview'>Quick Review</h2>
                <h3>
                    <span className="getTag">Session JSON</span> Response format of each session
                </h3>
                <p className="paragraphNote">*Both music and freestyle session have the same format</p>
                <SessionFormat />
            </section>
            <section className="musicContainer marginTop50px">
                <GetAllMusic />
            </section>
            <section className="musicContainer marginTop50px marginBottom100px">
                <GetAllFreestyle />
            </section>
        </>
    )
}