import "./styles.css";
import { FiFolder, FiFile } from "react-icons/fi";
import { document, directory } from "../FileExplorerComponent";

export interface FileExplorerItemProps {
    type: string;
    item: document | directory;
    selectedId: string | null;
    selectAction: Function;
}

export const FileExplorerItemComponent = ({ type, item, selectedId, selectAction }: FileExplorerItemProps) => {
    return (
        <div className={`explorer-item ${selectedId === item.id ? "selected" : ""}`} onClick={() => selectAction(type, item.id)}>
            {type === "document" ? <FiFile /> : <FiFolder />}
            <span>{item.title}</span>
        </div>
    )
}