import React, { createContext, useState, useContext, ReactNode } from "react";

type DockContextType = {
    isShowingFileExplorer: boolean;
    setIsShowingFileExplorer: React.Dispatch<React.SetStateAction<boolean>>;
    isSearchOpen: boolean;
    setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isSettingsOpen: boolean;
    setIsSettingsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

type DockContextProviderProps = {
    children: ReactNode;
}

export const DockContext = createContext({} as DockContextType);

export function DockProvider(props: DockContextProviderProps) {
    const [isShowingFileExplorer, setIsShowingFileExplorer] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    return (
        <DockContext.Provider
            value={{
                isShowingFileExplorer,
                setIsShowingFileExplorer,
                isSearchOpen,
                setIsSearchOpen,
                isSettingsOpen,
                setIsSettingsOpen
            }}
        >
            {props.children}
        </DockContext.Provider>
    )
}

export function useDock() {
    const context = useContext(DockContext);

    if (!context) throw new Error("useDock must be used within a DockProvider");

    const {
        isShowingFileExplorer,
        setIsShowingFileExplorer,
        isSearchOpen,
        setIsSearchOpen,
        isSettingsOpen,
        setIsSettingsOpen
    } = context;
    return {
        isShowingFileExplorer,
        setIsShowingFileExplorer,
        isSearchOpen,
        setIsSearchOpen,
        isSettingsOpen,
        setIsSettingsOpen
    }
}