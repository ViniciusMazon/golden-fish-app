import "./styles.css";
import { FiFilePlus, FiFolderPlus, FiChevronLeft } from "react-icons/fi";
import { FileExplorerItemComponent, FileExplorerItemProps } from "../FileExplorerItemComponent";
import { FileExplorerFormComponent } from "../FileExplorerFormComponent";
import { useState } from "react";
import { directory, document } from "../FileExplorerComponent";

interface ExplorerLayerProps {
    ownerId: string;
    parentId: string | null;
    selectedId: string | null;
    documents: document[] | [];
    directories: directory[] | [];
    selectItem: Function;
    actionBack: Function;
}

export const FileExplorerLayerComponent = ({ documents, directories, parentId, ownerId, selectedId, selectItem, actionBack }: ExplorerLayerProps) => {
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
                <FiChevronLeft onClick={() => actionBack()} />
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
                ownerId={ownerId}
            />}
            {isFormDocumentVisible && <FileExplorerFormComponent
                placeholder="Nome do documento..."
                type="document"
                toggle={handleToggleDocumentForm}
                parentId={parentId}
                ownerId={ownerId}
            />}

            {
                directories.map(item => (
                    <FileExplorerItemComponent key={item.id} type={"directory"} selectedId={selectedId} item={item} selectAction={selectItem} />
                ))
            }
            {
                documents.map(item => (
                    <FileExplorerItemComponent key={item.id} type={"document"} item={item} selectedId={selectedId} selectAction={selectItem} />
                ))
            }
        </div>
    )
}