import "./styles.css";

import { useDock } from "../../context/Dock";
import { FileExplorerLayerComponent } from "../FileExplorerLayerComponent";

export const FileExplorerComponent = () => {
    const { isShowingFileExplorer } = useDock();
    const directoriesAndFolders = [
        {
            id: "fdafasdfa",
            title: "Pasta de teste",
            parentId: "asfasda",
            type: "directory",
        },
        {
            id: "fdafasdfa",
            title: "Pasta de teste",
            parentId: "asfasda",
            type: "document"
        }
    ];

    if (!isShowingFileExplorer) {
        return (<></>);
    }

    return (
        <div id="explorer-container">
            <FileExplorerLayerComponent items={directoriesAndFolders} />
            <FileExplorerLayerComponent items={directoriesAndFolders} />
        </div>
    )
}