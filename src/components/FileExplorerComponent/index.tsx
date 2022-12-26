import "./styles.css";
import { FiFilePlus, FiFolderPlus, FiChevronLeft } from "react-icons/fi";
import { FileExplorerItemComponent } from "../FileExplorerItemComponent";
import { FileExplorerFormComponent } from "../FileExplorerFormComponent";

export const FileExplorerComponent = () => {
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
    ]

    return (
        <div id="explorer-container">
            <div className="explorer-content">
                <div className="spacer">
                    <FiChevronLeft />
                    <div>
                        <FiFolderPlus />
                        <FiFilePlus />
                    </div>
                </div>


                <FileExplorerFormComponent />


                {
                    directoriesAndFolders.map(item => (
                        <FileExplorerItemComponent {...item} />
                    ))
                }
            </div>

            <div className="explorer-content">
                <div className="spacer">
                    <FiChevronLeft />
                    <div>
                        <FiFolderPlus />
                        <FiFilePlus />
                    </div>
                </div>

                <FileExplorerFormComponent />

                {
                    directoriesAndFolders.map(item => (
                        <FileExplorerItemComponent {...item} />
                    ))
                }
            </div>
        </div>
    )
}