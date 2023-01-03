import Modal from "react-modal"
import { FiArrowLeft } from "react-icons/fi";
import "./styles.css";
import { useDock } from "../../context/Dock";
import { useEffect, useState } from "react";
import { GeneralSettings } from "./General";
import { EditorSettings } from "./Editor";
import { PreviewSettings } from "./Preview";
import { AccountSettings } from "./Account";
import { TrashSettings } from "./Trash";
import { settingsService } from "../../services/SettingsService";
import { userService } from "../../services/UserService";
import { Settings, User } from "../../types";
import { setSourceMapRange } from "typescript";

interface ObjectMap {
    [key: string]: JSX.Element
}

export const SettingsComponent = () => {
    const userId = "3f5b8cf2-f0c0-4ed3-af47-5fe63ce19155";
    const { isSettingsOpen, setIsSettingsOpen } = useDock();
    const [selectedCategory, setSelectedCategory] = useState<string>("general");
    const [settings, setSettings] = useState<Settings>();
    const [user, setUser] = useState<User>();

    const categories = [
        "General",
        "Editor",
        "Preview",
        "Account",
        "Trash"
    ];

    const categoriesView: ObjectMap = {
        "general": < GeneralSettings initialScreen={settings?.initialScreen ? settings.initialScreen : ""} />,
        "editor": <EditorSettings
            editorTheme={settings?.editorTheme || "materialDark"}
            isLineNumber={settings?.isLineNumber || true}
            editorFontSize={settings?.editorFontSize || 16}
        />,
        "preview": <PreviewSettings
            previewFontSize={settings?.previewFontSize || 16}
            isPreview={settings?.isPreview || true}
        />,
        "account": <AccountSettings
            username={user?.username || ""}
            email={user?.email || ""}
        />,
        "trash": <TrashSettings isAutoClean={settings?.isAutoClean || false} />
    }

    useEffect(() => {
        init();
    }, [])

    async function init() {
        const settingsResult = await settingsService.getByUserId(userId);
        setSettings(settingsResult.data);

        const userResult = await userService.getById(userId);
        setUser(userResult.data);
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
                        <FiArrowLeft onClick={closeSettings} />
                        <button>Apply</button>
                    </div>
                    <ul>
                        {categories.map(item => (
                            <li className={`${selectedCategory === item.toLowerCase() ? "selected-category" : ""}`} key={item} onClick={() => handleChangeCategory(item.toLowerCase())}>
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