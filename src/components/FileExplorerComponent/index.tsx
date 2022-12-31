import "./styles.css";
import { useDock } from "../../context/Dock";
import { FileExplorerLayerComponent } from "../FileExplorerLayerComponent";
import { useState, useEffect } from "react";
import { documentService } from "../../services/DocumentService";
import { directoryService } from "../../services/DirectoryService";
import toast from 'react-hot-toast';
import { Directory, Document } from "../../types";
import { useDocument } from "../../context/Document";


export const FileExplorerComponent = () => {
    const { isShowingFileExplorer, setIsShowingFileExplorer } = useDock();
    const { setCurrentDocument } = useDocument();

    const ownerId = "3f5b8cf2-f0c0-4ed3-af47-5fe63ce19155";
    const [historyParentIdLayerA, setHistoryParentIdLayerA] = useState<string | null>(null);
    const [parentIdLayerA, setParentIdLayerA] = useState<string | null>(null);
    const [parentIdLayerB, setParentIdLayerB] = useState<string | null>(null);

    const [layerADirectories, setLayerADirectories] = useState<Directory[]>([]);
    const [layerADocuments, setLayerADocuments] = useState<Document[]>([]);
    const [layerBDirectories, setLayerBDirectories] = useState<Directory[]>([]);
    const [layerBDocuments, setLayerBDocuments] = useState<Document[]>([]);

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

    async function handleSelectItemLayerA(type: string, id: string) {
        if (type === "directory") {
            await fillLayerB(id);
        }

        if (type === "document") {
            const target = layerADocuments.filter(doc => doc.id === id)[0];
            setCurrentDocument(null);
            setCurrentDocument(target);
            setIsShowingFileExplorer(false);
            toast(`Documento: ${target.title}`,
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
    }

    async function handleSelectItemLayerB(type: string, id: string) {
        if (type === "directory") {
            switchLayers();
            await fillLayerB(id);
        }

        if (type === "document") {
            const target = layerBDocuments.filter(doc => doc.id === id)[0];
            setCurrentDocument(null);
            setCurrentDocument(target);
            setIsShowingFileExplorer(false);
            toast(`Documento: ${target.title}`,
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