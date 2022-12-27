import "./styles.css";
import { FiFolder, FiFile } from "react-icons/fi";
import { document, directory } from "../FileExplorerComponent";
import { useEffect } from "react";


export interface FileExplorerItemProps {
    type: string;
    item: document | directory;
    selectAction: Function
}

export const FileExplorerItemComponent = ({ type, item, selectAction }: FileExplorerItemProps) => {
    return (
        <div className="explorer-item" onClick={() => selectAction(type, item.id)}>
            {type === "document" ? <FiFile /> : <FiFolder />}
            <span>{item.title}</span>
        </div>
    )
}