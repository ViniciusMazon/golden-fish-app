import "./styles.css";
import { FiFilePlus, FiFolderPlus, FiChevronLeft } from "react-icons/fi";
import { FileExplorerItemComponent, FileExplorerItemProps } from "../FileExplorerItemComponent";
import { FileExplorerFormComponent } from "../FileExplorerFormComponent";
import { useState } from "react";
import { directory, document } from "../FileExplorerComponent";

interface ExplorerLayerProps {
    parentId: string | null;
    documents: document[] | [];
    directories: directory[] | [];
}

export const FileExplorerLayerComponent = ({ documents, directories, parentId }: ExplorerLayerProps) => {
    const [isFormDirectoryVisible, setIsFormDirectoryVisible] = useState(false);
    const [isFormDocumentVisible, setIsFormDocumentVisible] = useState(false);

    function handleToggleDirectoryForm() {
        setIsFormDirectoryVisible(!isFormDirectoryVisible);
    }

    function handleToggleDocumentForm() {
        setIsFormDocumentVisible(!isFormDocumentVisible);
    }

    return (
        <div className="explorer-content">
            <div className="spacer">
                <FiChevronLeft />
                <div>
                    <FiFolderPlus onClick={handleToggleDirectoryForm} />
                    <FiFilePlus onClick={handleToggleDocumentForm} />
                </div>
            </div>
            {isFormDirectoryVisible && <FileExplorerFormComponent
                placeholder="Nome do diretório..."
                type="directory"
                toggle={handleToggleDirectoryForm}
                parentId={parentId}
            />}
            {isFormDocumentVisible && <FileExplorerFormComponent
                placeholder="Nome do documento..."
                type="document"
                toggle={handleToggleDocumentForm}
                parentId={parentId}
            />}

            {
                directories.map(item => (
                    <FileExplorerItemComponent key={item.id} type={"directory"} item={item} />
                ))
            }
            {
                documents.map(item => (
                    <FileExplorerItemComponent key={item.id} type={"document"} item={item} />
                ))
            }
        </div>
    )
}