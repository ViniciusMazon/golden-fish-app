import "./styles.css";
import { FiFilePlus, FiFolderPlus, FiChevronLeft } from "react-icons/fi";
import { FileExplorerItemComponent, FileExplorerItemProps } from "../FileExplorerItemComponent";
import { FileExplorerFormComponent } from "../FileExplorerFormComponent";
import { useState } from "react";

interface ExplorerLayerProps {
    items: FileExplorerItemProps[];
}

export const FileExplorerLayerComponent = ({ items }: ExplorerLayerProps) => {
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
            />}
            {isFormDocumentVisible && <FileExplorerFormComponent
                placeholder="Nome do documento..."
                type="document"
                toggle={handleToggleDocumentForm}
            />}

            {
                items.map(item => (
                    <FileExplorerItemComponent {...item} />
                ))
            }
        </div>
    )
}