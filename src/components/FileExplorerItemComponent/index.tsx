import "./styles.css";
import { FiFolder, FiFile } from "react-icons/fi";

export interface FileExplorerItemProps {
    id: string;
    title: string;
    parentId: string;
    type: string;
}

export const FileExplorerItemComponent = (props: FileExplorerItemProps) => {
    return (
        <div className="explorer-item" key={props.id}>
            {props.type === "document" ? <FiFile /> : <FiFolder />}
            <span>item.title</span>
        </div>
    )
}