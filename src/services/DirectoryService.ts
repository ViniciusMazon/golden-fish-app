import apiService from "./ApiService";

async function create(title: string, ownerId: string, parentId: string | null) {
    await apiService.post("/directory", {
        title,
        ownerId,
        parentId
    });
}

async function getByParentId(parentId: string | null) {
    const result = await apiService.get(`/directory/${parentId}`);
    return result.data;
}

export const directoryService = {
    create,
    getByParentId
}