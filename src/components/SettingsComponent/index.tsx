import Modal from "react-modal"
import { FiArrowLeft } from "react-icons/fi";
import "./styles.css";
import { useDock } from "../../context/Dock";
import { useState } from "react";
import { GeneralSettings } from "./General";
import { EditorSettings } from "./Editor";
import { PreviewSettings } from "./Preview";
import { AccountSettings } from "./Account";
import { TrashSettings } from "./Trash";

interface ObjectMap {
    [key: string]: JSX.Element
}

export const SettingsComponent = () => {
    const { isSettingsOpen, setIsSettingsOpen } = useDock();
    const [selectedCategory, setSelectedCategory] = useState<string>("general");

    const categories = [
        "General",
        "Editor",
        "Preview",
        "Account",
        "Trash"
    ];

    const categoriesView: ObjectMap = {
        "general": < GeneralSettings />,
        "editor": <EditorSettings />,
        "preview": <PreviewSettings />,
        "account": <AccountSettings />,
        "trash": <TrashSettings />
    }

    function handleChangeCategory(category: string) {
        setSelectedCategory(category);
    }

    function closeSettings() {
        setIsSettingsOpen(false);
    }

    return (
        <Modal
            isOpen={isSettingsOpen}
            onRequestClose={closeSettings}
            style={{
                overlay: {
                    backgroundColor: 'transparent',
                },
                content: {
                    height: '60%',
                    width: '50%',
                    padding: 0,
                    backgroundColor: 'transparent',
                    border: 'none',
                    position: 'absolute',
                    top: '15%',
                    left: '25%'
                }
            }}
        >
            <div id="settings-modal">
                <div className="settings-menu">
                    <div>
                        <FiArrowLeft onClick={closeSettings}/>
                        <button>Apply</button>
                    </div>
                    <ul>
                        {categories.map(item => (
                            <li key={item} onClick={() => handleChangeCategory(item.toLowerCase())}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="settings-options">
                    {categoriesView[selectedCategory]}
                </div>
            </div>
        </Modal>
    )
}