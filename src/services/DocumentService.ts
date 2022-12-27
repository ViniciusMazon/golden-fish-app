import apiService from "./ApiService";

async function create(title: string, ownerId: string, parentId: string | null) {
    await apiService.post('/document', {
       title,
       content: "teste",
        ownerId,
        parentId
    });
}

async function getByParentId(parentId: string | null) {
    const result = await apiService.get(`/document/${parentId}`);
    return result.data;
}

export const documentService = {
    create,
    getByParentId
}