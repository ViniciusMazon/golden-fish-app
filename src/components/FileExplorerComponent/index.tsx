import "./styles.css";
import { useDock } from "../../context/Dock";
import { FileExplorerLayerComponent } from "../FileExplorerLayerComponent";
import { useState, useEffect } from "react";
import { documentService } from "../../services/DocumentService";
import { directoryService } from "../../services/DirectoryService";
import toast from 'react-hot-toast';

export interface document {
    id: string;
    title: string;
    content: string;
    ownerId: string;
    parentId: string | null;
    createdAt?: string;
    deletedAt?: string | null;
}

export interface directory {
    id: string;
    title: string;
    ownerId: string;
    parentId: string | null;
    createdAt?: string;
    deletedAt?: string | null;
}

export const FileExplorerComponent = () => {
    const { isShowingFileExplorer } = useDock();

    const ownerId = "3f5b8cf2-f0c0-4ed3-af47-5fe63ce19155";
    const [historyParentIdLayerA, setHistoryParentIdLayerA] = useState<string | null>(null);
    const [parentIdLayerA, setParentIdLayerA] = useState<string | null>(null);
    const [parentIdLayerB, setParentIdLayerB] = useState<string | null>(null);

    const [layerADirectories, setLayerADirectories] = useState<directory[]>([]);
    const [layerADocuments, setLayerADocuments] = useState<document[]>([]);
    const [layerBDirectories, setLayerBDirectories] = useState<directory[]>([]);
    const [layerBDocuments, setLayerBDocuments] = useState<document[]>([]);

    useEffect(() => {
        init();
    }, []);

    async function init() {
        const documents = await getDocuments("root");
        const directories = await getDirectories("root");
        setLayerADocuments(documents.data);
        setLayerADirectories(directories.data);
        setParentIdLayerA("root");
        toast('Tudo pronto!',
            {
                icon: '🐠',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            }
        );
    }

    async function getDocuments(parentId: string | null) {
        return await documentService.getByParentId(parentId);
    }

    async function getDirectories(parentId: string | null) {
        return await directoryService.getByParentId(parentId);
    }

    function switchLayers() {
        setHistoryParentIdLayerA(parentIdLayerA);
        const layerADirectoriesTmp = layerADirectories;
        const layerADocumentsTmp = layerADocuments;
        const parentIdLayerATmp = parentIdLayerA;
        setLayerADirectories(layerBDirectories);
        setLayerADocuments(layerBDocuments);
        setLayerBDirectories(layerADirectoriesTmp);
        setLayerBDocuments(layerADocumentsTmp);
        setParentIdLayerA(parentIdLayerB);
        setParentIdLayerB(parentIdLayerATmp);
    }

    async function fillLayerA(rootId: string | null) {
        const resultDirectoriesLayerA = await getDirectories(rootId);
        const resultDocumentsLayerA = await getDocuments(rootId);
        setParentIdLayerA(rootId);
        setLayerADirectories(resultDirectoriesLayerA.data);
        setLayerADocuments(resultDocumentsLayerA.data);
    }

    async function fillLayerB(rootId: string | null) {
        const resultDirectoriesLayerB = await getDirectories(rootId);
        const resultDocumentsLayerB = await getDocuments(rootId);
        setParentIdLayerB(rootId);
        setLayerBDirectories(resultDirectoriesLayerB.data);
        setLayerBDocuments(resultDocumentsLayerB.data);
    }

    async function handleSelectItemLayerA(type: string, rootId: string) {
        if (type === "directory") {
            await fillLayerB(rootId);
        }
    }

    async function handleSelectItemLayerB(type: string, rootId: string) {
        if (type === "directory") {
            switchLayers();
            await fillLayerB(rootId);
        }
    }

    function handleBackLayerB() {
        setParentIdLayerB(null);
        setLayerBDirectories([]);
        setLayerBDocuments([]);
    }

    async function handleBackLayerA() {
        switchLayers();
        await fillLayerA(historyParentIdLayerA);
    }

    if (!isShowingFileExplorer) {
        return (<></>);
    }

    return (
        <div id="explorer-container">
            <FileExplorerLayerComponent
                ownerId={ownerId}
                parentId={parentIdLayerA}
                documents={layerADocuments}
                directories={layerADirectories}
                selectItem={handleSelectItemLayerA}
                actionBack={handleBackLayerA}
                selectedId={parentIdLayerB}
                reload={fillLayerA}
            />
            <FileExplorerLayerComponent
                ownerId={ownerId}
                parentId={parentIdLayerB}
                documents={layerBDocuments}
                directories={layerBDirectories}
                selectItem={handleSelectItemLayerB}
                actionBack={handleBackLayerB}
                selectedId={parentIdLayerB}
                reload={fillLayerB}
            />
        </div>
    )
}