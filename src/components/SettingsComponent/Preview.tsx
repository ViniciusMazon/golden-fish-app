import { useState } from "react";
import Switch from "react-switch";

interface Props {
    previewFontSize: number;
    isPreview: boolean;
}

export const PreviewSettings = ({ previewFontSize, isPreview }: Props) => {
    const [isPreviewVisible, setIsPreviewVisible] = useState(isPreview);
    const [fontSize, setFontSize] = useState<number>(previewFontSize);

    return (
        <div>
            <h1>Preview</h1>

            <div className="input-group">
                <label>Font size</label>
                <input type="number" value={fontSize} onChange={(event) => setFontSize(Number(event.target.value))} />
            </div>

            <div className="input-group">
                <label>Show preview</label>
                <Switch checked={isPreviewVisible} onChange={setIsPreviewVisible} />
            </div>
        </div>
    )
}