export function SessionFormat() {
    return (
        <pre>
            <code>
                {"{"}
                <p className="codeRightP">
                    <span className='blueSpan'>"_id"</span> : Mongo ID,
                </p>
                <p className="codeRightP">
                    <span className='blueSpan'>"session_number"</span> : Number,
                </p>
                <p className="codeRightP">
                    <span className='blueSpan'>"official_title"</span> : String,
                </p>
                <p className="codeRightP">
                    <span className='blueSpan'>"youtube_link"</span> : String,
                </p>
                <p className="codeRightP">
                    <span className='blueSpan'>"artist"</span> : String,
                </p>
                <p className="codeRightP">
                    <span className='blueSpan'>"shot_by"</span> : String,
                </p>
                <p className="codeRightP">
                    <span className='blueSpan'>"release_date"</span> : String,
                </p>
                <p className="codeRightP">
                    <span className='blueSpan'>"release_year"</span> : Number,
                </p>
                <p className="codeRightP">
                    <span className='blueSpan'>"poster"</span> : String
                </p>
                {"}"}
            </code>
        </pre>
    )
}