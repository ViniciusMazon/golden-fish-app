import React, { createContext, useState, useContext, ReactNode } from "react";

type DockContextType = {
    isShowingFileExplorer: boolean;
    setIsShowingFileExplorer: React.Dispatch<React.SetStateAction<boolean>>;
}

type DockContextProviderProps = {
    children: ReactNode;
}

export const DockContext = createContext({} as DockContextType);

export function DockProvider(props: DockContextProviderProps) {
    const [isShowingFileExplorer, setIsShowingFileExplorer] = useState(false);

    return (
        <DockContext.Provider
            value={{ isShowingFileExplorer, setIsShowingFileExplorer }}
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
        setIsShowingFileExplorer
    } = context;
    return {
        isShowingFileExplorer,
        setIsShowingFileExplorer
    }
}