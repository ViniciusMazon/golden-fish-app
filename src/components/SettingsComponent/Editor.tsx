import { useState } from "react";
import Switch from "react-switch";

const themesList = [
    "materialDark"
]

export const EditorSettings = () => {
    const [isLineNumbersActive, setIsLineNumbersActive] = useState(true);
    const [themeSelected, setThemeSelected] = useState("materialDark");

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
                <Switch  onChange={setIsLineNumbersActive} checked={isLineNumbersActive} />
            </div>

            <div className="input-group">
                <label>Font size</label>
                <input type="number" />
            </div>
        </div>
    )
}