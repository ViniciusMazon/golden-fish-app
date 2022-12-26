import "./styles.css";
import { FiFolder, FiFile, FiMinusCircle } from "react-icons/fi";
import { useState } from "react";

interface ExplorerFormProps {
    placeholder: string;
    type: string;
    toggle: Function;
}

export const FileExplorerFormComponent = ({
    placeholder,
    type,
    toggle
}: ExplorerFormProps) => {
    const [title, setTitle] = useState("");

    function handleCancelForm() {
        setTitle("");
        toggle();
    }

    function handleSubmit() {
        console.log(title)
    }

    return (
        <form className="explorer-new" onSubmit={handleSubmit}>
            {type === "document" ? <FiFile /> : <FiFolder />}
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} placeholder={placeholder} />
            <FiMinusCircle onClick={handleCancelForm}/>
        </form>
    )
}