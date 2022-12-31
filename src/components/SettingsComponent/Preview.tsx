import { useState } from "react";
import Switch from "react-switch";

export const PreviewSettings = () => {
    const [isPreviewVisible, setIsPreviewVisible] = useState(true);

    return (
        <div>
            <h1>Preview</h1>

            <div className="input-group">
                <label>Font size</label>
                <input type="number" />
            </div>

            <div className="input-group">
                <label>Show preview</label>
                <Switch checked={isPreviewVisible} onChange={setIsPreviewVisible} />
            </div>
        </div>
    )
}