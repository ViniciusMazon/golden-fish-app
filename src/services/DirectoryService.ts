import { Directory } from "../types";
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

async function update(directoryId: string, directory: Directory) {
    await apiService.put(`/directory/${directoryId}`, directory);
}

async function destroy(directoryId: string) {
    await apiService.delete(`/directory/${directoryId}`)
}

export const directoryService = {
    create,
    getByParentId,
    update,
    destroy
}