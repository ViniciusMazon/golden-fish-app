import "./styles.css";
import { FiFolder, FiFile } from "react-icons/fi";
import { document, directory } from "../FileExplorerComponent";
import { useEffect } from "react";


export interface FileExplorerItemProps {
    type: string;
    item: document | directory;
}

export const FileExplorerItemComponent = ({ type, item }: FileExplorerItemProps) => {
    useEffect(() => {
        console.log(type)
    })
    return (
        <div className="explorer-item">
            {type === "document" ? <FiFile /> : <FiFolder />}
            <span>{item.title}</span>
        </div>
    )
}