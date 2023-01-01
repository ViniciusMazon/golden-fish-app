import { useState } from "react";

interface Props {
    initialScreen: string
}

export const GeneralSettings = ({ initialScreen }: Props) => {
    const [initialScr, setInitialScr] = useState(initialScreen);

    return (
        <div id="general">
            <h1>General</h1>
            <div className="input-group">
                <label>Initial screen</label>
                <textarea value={initialScr} onChange={(event) => setInitialScr(event.target.value)} />
            </div>
        </div>
    )
}