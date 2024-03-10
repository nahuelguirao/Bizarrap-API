export function GetAllMusic() {
    return (
        <>
            <h3>
                <span className="getTag">GET</span> ALL Music Sessions
            </h3>
            <p className="paragraphNote">*If all is ok it will return and array of sessions</p>
            <div className="urlContainer">
                <p>URL <span className="urlLink">https://bizarrap-api-production.up.railway.app/sessions/music</span></p>
            </div>
            <pre>
                <code>
                    <p>
                        <span className="blueSpan">fetch</span>(<span className="urlSpan">'https://bizarrap-api-production.up.railway.app/sessions/music'</span>)
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
        </>
    )
}