import { createContext, ReactNode, useContext, useState } from "react";
import { Document } from "../types"

type DocumentContextType = {
    currentDocument: Document | null;
    setCurrentDocument: Function;
}

type DocumentContextProviderProps = {
    children: ReactNode;
}

export const DocumentContext = createContext({} as DocumentContextType);

export function DocumentProvider(props: DocumentContextProviderProps) {
    const [currentDocument, setCurrentDocument] = useState<Document | null>(null);

    return (
        <DocumentContext.Provider
            value={{ currentDocument, setCurrentDocument }}
        >
            {props.children}
        </DocumentContext.Provider>
    )
}

export function useDocument() {
    const context = useContext(DocumentContext);

    if (!context) throw new Error("useDocument must be used within a DocumentProvider");

    const {
        currentDocument,
        setCurrentDocument
    } = context;
    return {
        currentDocument,
        setCurrentDocument
    }
}

