import "./styles.css";
import { FiFolder, FiFile } from "react-icons/fi";

export const FileExplorerFormComponent = () => {

    return (
        <div className="explorer-new">
            {"document" === "document" ? <FiFile /> : <FiFolder />}
            <input type="text" placeholder="Digite um titulo..." />
        </div>
    )
}