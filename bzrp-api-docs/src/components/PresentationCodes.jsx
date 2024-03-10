import '../style/musicSessionsStyles.css'
import { GetAllMusic } from './CodeExamples/GetAllMusic'
import { SessionFormat } from './CodeExamples/SessionFormat'

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
                <h3>
                    <span className="getTag">GET</span> ALL Freestyle Sessions
                </h3>
                <p className="paragraphNote">*If all is ok it will return and array of sessions</p>
                <div className="urlContainer">
                    <p>URL <span className="urlLink">http://localhost:3000/sessions/freestyle</span></p>
                </div>
                <pre>
                    <code>
                        <p>
                            <span className="blueSpan">fetch</span>(<span className="urlSpan">'http://localhost:3000/sessions/freestyle'</span>)
                        </p>
                        <p className="codeRightP">
                            .<span className="blueSpan">then</span>(response {`=>`} response.<span className="blueSpan">json</span>())
                        </p>
                        <p className="codeRightP">
                            .<span className="blueSpan">then</span>(data {`=>`} console.<span className="blueSpan">log</span>(data))
                        </p>
                        <p className="codeRightP">
                            .<span className="blueSpan">catch</span>(error {`=>`} console.<span className="redSpan">error</span>('Error:', error));
                        </p>
                    </code>
                </pre>
            </section>
        </>
    )
}