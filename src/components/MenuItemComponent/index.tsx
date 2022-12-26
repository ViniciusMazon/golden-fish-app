import "./styles.css"
import { FiFolder, FiSearch, FiSettings, FiStar } from "react-icons/fi";

export interface MenuItemComponentProps {
    tooltip: string;
    icon: string;
    action: Function
}

export const MenuItemComponent = (props: MenuItemComponentProps) => {
    return (
        <div className="menu-bar-item" onClick={() => props.action()}>
            {props.icon === "folder" && <FiFolder />}
            {props.icon === "finder" && <FiSearch />}
            {props.icon === "settings" && <FiSettings />}
            {props.icon === "favorite" && <FiStar />}
            <p>{props.tooltip}</p>
        </div>
    )
}