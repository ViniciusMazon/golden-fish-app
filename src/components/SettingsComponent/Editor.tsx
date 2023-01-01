import { useState } from "react";
import Switch from "react-switch";

interface Props {
    editorTheme: string;
    isLineNumber: boolean;
    editorFontSize: number;
}

const themesList = [
    "materialDark"
]

export const EditorSettings = ({ editorFontSize, isLineNumber, editorTheme }: Props) => {
    const [isLineNumbersActive, setIsLineNumbersActive] = useState(isLineNumber);
    const [themeSelected, setThemeSelected] = useState<string>(editorTheme || "materialDark");
    const [fontSize, setFontSize] = useState<number>(editorFontSize);

    return (
        <div>
            <h1>Editor</h1>

            <div className="input-group">
                <label>Theme</label>
                <select value={themeSelected} onChange={(event) => setThemeSelected(event.target.value)}>
                    {themesList.map(theme => (
                        <option key={theme} value={theme}>{theme}</option>
                    ))}
                </select>
            </div>

            <div className="input-group">
                <label>Lines number</label>
                <Switch onChange={setIsLineNumbersActive} checked={isLineNumbersActive} />
            </div>

            <div className="input-group">
                <label>Font size</label>
                <input type="number" value={fontSize} onChange={(event) => setFontSize(Number(event.target.value))} />
            </div>
        </div>
    )
}