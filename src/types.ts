export interface Document {
    id: string;
    title: string;
    content: string;
    ownerId: string;
    parentId: string | null;
    createdAt?: string;
    deletedAt?: string | null;
}

export interface Directory {
    id: string;
    title: string;
    ownerId: string;
    parentId: string | null;
    createdAt?: string;
    deletedAt?: string | null;
}