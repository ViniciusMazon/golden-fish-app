import Modal from "react-modal"
import { FiArrowLeft } from "react-icons/fi";
import "./styles.css";
import { useDock } from "../../context/Dock";

export const SettingsComponent = () => {
    const { isSettingsOpen, setIsSettingsOpen } = useDock();

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
                        <FiArrowLeft />
                        <button>Apply</button>
                    </div>
                    <ul>
                        <li>Account</li>
                        <li>Editor</li>
                        <li>Preview</li>
                        <li>Privacy</li>
                    </ul>
                </div>
                <div className="settings-options">
                    <h1>Account</h1>
                </div>
            </div>
        </Modal>
    )
}