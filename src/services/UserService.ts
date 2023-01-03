import apiService from "./ApiService";

async function getById(userId: string) {
    const result = await apiService.get(`/user/${userId}`);
    return result.data;
}

export const userService = {
    getById
}