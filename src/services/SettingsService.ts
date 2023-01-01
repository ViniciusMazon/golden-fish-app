import apiService from "./ApiService";

async function getByUserId(userId: string) {
    const result = await apiService.get(`/settings/${userId}`);
    return result.data;
}

export const settingsService = {
    getByUserId
}