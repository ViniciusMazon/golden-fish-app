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
    await apiService.put(`/document/${documentId}`, document);
}

async function destroy(documentId: string) {
    await apiService.delete(`/document/${documentId}`)
}

export const documentService = {
    create,
    getByParentId,
    update,
    destroy
}