import { useState } from "react";
import Switch from "react-switch";

export const TrashSettings = () => {
    const [isAutoClean, setIsAutoClean] = useState(false);

    return (
        <div>
            <h1>Trash</h1>
            <div className="input-group">
                <label>Auto clean</label>
                <Switch checked={isAutoClean} onChange={setIsAutoClean} />
            </div>

            <div className="input-group">
                <label>Deleted files</label>
                <ul>
                    <li>Nome do arquivo excluido 1</li>
                    <li>Nome do arquivo excluido 2</li>
                    <li>Nome do arquivo excluido 3</li>
                </ul>
            </div>

        </div>
    )
}