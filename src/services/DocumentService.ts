import apiService from "./ApiService";
import { Document } from "../types";

async function create(title: string, ownerId: string, parentId: string | null) {
    await apiService.post('/document', {
        title,
        content: "",
        ownerId,
        parentId
    });
}

async function getByParentId(parentId: string | null) {
    const result = await apiService.get(`/document/${parentId}`);
    return result.data;
}

async function update(documentId: string, document: Document) {
    await await apiService.put(`/document/${documentId}`, document);
}

export const documentService = {
    create,
    getByParentId,
    update
}