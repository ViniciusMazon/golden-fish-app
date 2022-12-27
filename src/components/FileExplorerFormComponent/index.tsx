import "./styles.css";
import { FiFolder, FiFile, FiMinusCircle } from "react-icons/fi";
import { useState } from "react";
import { documentService } from "../../services/DocumentService";
import { directoryService } from "../../services/DirectoryService";

interface ExplorerFormProps {
    ownerId: string;
    parentId: string | null;
    placeholder: string;
    type: string;
    toggle: Function;
}

export const FileExplorerFormComponent = ({
    placeholder,
    type,
    toggle,
    parentId,
    ownerId
}: ExplorerFormProps) => {
    const [title, setTitle] = useState("");

    function handleCancelForm() {
        setTitle("");
        toggle();
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        type === "document" ? createDocument() : createDirectory();
    }

    async function createDocument() {
        try {
            await documentService.create(title, ownerId, parentId);
            setTitle("");
            toggle();
        } catch (error) {
            console.error(error);
        }
    }

    async function createDirectory() {
        try {
            await directoryService.create(title, ownerId, parentId);
            setTitle("");
            toggle();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form className="explorer-new" onSubmit={handleSubmit}>
            {type === "document" ? <FiFile /> : <FiFolder />}
            <input autoFocus type="text" value={title} onChange={(event) => setTitle(event.target.value)} placeholder={placeholder} />
            <FiMinusCircle onClick={handleCancelForm} />
        </form>
    )
}