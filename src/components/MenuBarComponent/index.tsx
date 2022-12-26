import { useDock } from "../../context/Dock";
import { MenuItemComponent, MenuItemComponentProps } from "../MenuItemComponent";
import "./style.css";

export const MenuBarComponent = () => {
    const { setIsShowingFileExplorer, isShowingFileExplorer } = useDock();

    function toggleFileExplorer() {
        setIsShowingFileExplorer(!isShowingFileExplorer);
    }
    const itens: MenuItemComponentProps[] = [
        {
            tooltip: "File explorer",
            icon: "folder",
            action: toggleFileExplorer
        },
        {
            tooltip: "Search",
            icon: "finder",
            action: () => { }
        },
        {
            tooltip: "Settings",
            icon: "settings",
            action: () => { }
        },
    ]

    const favorites: MenuItemComponentProps[] = [
        {
            tooltip: "Document example 1",
            icon: "favorite",
            action: () => { }
        },
        {
            tooltip: "Document example 2",
            icon: "favorite",
            action: () => { }
        },
        {
            tooltip: "Document example 3",
            icon: "favorite",
            action: () => { }
        }
    ]
    return (
        <div id="dock-container">
            <nav>
                {
                    itens.map((item: MenuItemComponentProps) => (
                        <MenuItemComponent key={item.tooltip} {...item} />
                    ))
                }
                <div className="divider" />
                {
                    favorites.map((item: MenuItemComponentProps) => (
                        <MenuItemComponent key={item.tooltip} {...item} />
                    ))
                }
            </nav>
        </div>
    )
}