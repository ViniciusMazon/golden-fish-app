import { useState } from "react";
import Switch from "react-switch";
import { FiCornerUpLeft } from "react-icons/fi";

const mockDeletedDocuments = [
    { id: '1', title: 'documento apagado 1' },
    { id: '2', title: 'documento apagado 2' },
    { id: '3', title: 'documento apagado 3' }
]

interface Props {
    isAutoClean: boolean;
}

export const TrashSettings = ({ isAutoClean }: Props) => {
    const [isAuto, setIsAuto] = useState(isAutoClean);

    async function restoreDocument(id: string) {

    }

    return (
        <div>
            <h1>Trash</h1>
            <div className="input-group">
                <label>Auto clean</label>
                <Switch checked={isAuto} onChange={setIsAuto} />
            </div>

            <div className="input-group">
                <label>Deleted files</label>
                <ul className="deleted-files-list">
                    {
                        mockDeletedDocuments.map(doc => (
                            <li key={doc.id} onClick={() => restoreDocument(doc.id)}>
                                <span>{doc.title}</span>
                                <FiCornerUpLeft />
                            </li>
                        ))
                    }

                </ul>
            </div>

        </div>
    )
}