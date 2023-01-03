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

export interface Settings {
    id: string;
    initialScreen: string;
    editorTheme: string;
    isLineNumber: boolean;
    editorFontSize: number;
    previewFontSize: number;
    isPreview: boolean;
    isAutoClean: boolean;
    userId: string;
}

export interface User {
    id: string;
    username: string;
    password: string;
    email: string;
    avatarUrl: string;
}