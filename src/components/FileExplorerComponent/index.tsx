import "./styles.css";
import { useDock } from "../../context/Dock";
import { FileExplorerLayerComponent } from "../FileExplorerLayerComponent";
import { useState, useEffect } from "react";
import { FileExplorerItemProps } from "../FileExplorerItemComponent";
import { documentService } from "../../services/DocumentService";
import { directoryService } from "../../services/DirectoryService";

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
        const documents = await getDocuments("38b3694b-71ad-4abf-82d8-c188ddb1298b");
        const directories = await getDirectories("38b3694b-71ad-4abf-82d8-c188ddb1298b");
        setLayerADocuments(documents.data);
        setLayerADirectories(directories.data);
        setParentIdLayerA("38b3694b-71ad-4abf-82d8-c188ddb1298b");
    }

    async function getDocuments(parentId: string | null) {
        return await documentService.getByParentId(parentId);
    }

    async function getDirectories(parentId: string | null) {
        return await directoryService.getByParentId(parentId);
    }

    if (!isShowingFileExplorer) {
        return (<></>);
    }

    return (
        <div id="explorer-container">
            <FileExplorerLayerComponent parentId={parentIdLayerA} documents={layerADocuments} directories={layerADirectories} />
            <FileExplorerLayerComponent parentId={parentIdLayerB} documents={layerBDocuments} directories={layerBDirectories}/>
        </div>
    )
}