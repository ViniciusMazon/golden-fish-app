import "./styles.css";
import { FiFolder, FiFile, FiEdit2, FiMinusCircle, FiTrash } from "react-icons/fi";
import { Directory, Document } from "../../types";
import { useState } from "react";
import Modal from 'react-modal';
import { directoryService } from "../../services/DirectoryService";
import { documentService } from "../../services/DocumentService";
export interface FileExplorerItemProps {
    type: string;
    item: Document | Directory;
    selectedId: string | null;
    selectAction: Function;
}

export const FileExplorerItemComponent = ({ type, item, selectedId, selectAction }: FileExplorerItemProps) => {
    const [isEditingIconVisible, setIsEditingIconVisible] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(item.title);
    const [isConfirmDeleteVisible, setIsConfirmDeleteVisible] = useState(false);

    function handleMouseOver() {
        setIsEditingIconVisible(true);
    }

    function handleMouseOut() {
        setIsEditingIconVisible(false);
    }

    function handleToggleEdit() {
        setIsEditing(!isEditing);
    }

    function toggleConfirmDeleteModal() {
        setIsConfirmDeleteVisible(!isConfirmDeleteVisible);
    }

    function handleDelete() {
        toggleConfirmDeleteModal();
    }

    function handleConfirmDelete() {
        try {
            type === "document" ?
                documentService.destroy(item.id) :
                directoryService.destroy(item.id)
        } catch (error) {
            console.error(error);
        } finally {
            toggleConfirmDeleteModal();
            handleToggleEdit();
        }
    }

    async function handleSubmit() {
        try {
            type === "document" ?
                documentService.update(item.id, item as Document) :
                directoryService.update(item.id, item)
        } catch (error) {
            console.error(error);
        } finally {
            handleToggleEdit();
        }
    }

    if (isEditing) {
        return (
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
                <FiMinusCircle onClick={handleToggleEdit} />
                <FiTrash onClick={handleDelete} />

                {isConfirmDeleteVisible && (
                    <Modal
                        isOpen={isConfirmDeleteVisible}
                        onRequestClose={toggleConfirmDeleteModal}
                        style={{
                            overlay: {
                                backgroundColor: 'rgba(51, 51, 51, 0.589)',
                                zIndex: 3
                            },
                            content: {
                                height: 'fit-content',
                                width: '40%',
                                padding: 0,
                                backgroundColor: '#484848',
                                border: '1px solid rgba(238, 238, 238, 0.582)',
                                borderRadius: "8px",
                                position: 'absolute',
                                top: '20%',
                                left: '30%'
                            }
                        }}
                    >
                        <div id="confirm-delete-modal">
                            <span>Apagar o {type === "document" ? "documento" : "diretório"}?</span>
                            <div>
                                <button type="button" onClick={handleConfirmDelete}>Apagar</button>
                                <button type="button" onClick={toggleConfirmDeleteModal}>Cancelar</button>
                            </div>
                        </div>
                    </Modal>
                )}
            </form>
        )
    }

    return (
        <div
            className={`explorer-item ${selectedId === item.id ? "selected" : ""}`}
            onClick={() => selectAction(type, item.id)}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <div>
                {type === "document" ? <FiFile /> : <FiFolder />}
                <span>{item.title}</span>
            </div>
            {isEditingIconVisible &&
                <FiEdit2 onClick={handleToggleEdit} />
            }
        </div>
    )
}