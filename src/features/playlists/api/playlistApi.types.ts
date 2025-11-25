import type { CurrentUserReaction } from "@/common/enums/userEnum";

export type Tag = {
    id: string;
    name: string;
}

export type User = {
    id: string;
    name: string;
}

export type Image = {
    main: Cover[]
}

export type Cover = {
    type: "original" | "thumbnail" | "medium";
    width: number;
    height: number;
    filseSize: number;
    url: string;
}

export type PlaylistAttributes = {
    title: string;
    description: string;
    order: number;
    user: User;
    images: Image;
    tags: Tag;
    likesCount: number;
    dislikesCount: number;
    currentUserReaction: CurrentUserReaction
}

export type PlaylistResourse = {
    id: string;
    type: string;
    attributes: PlaylistAttributes
}

export type PlaylistsMeta = {
    totalCount: number;
    page: number;
    pageSize: number;
    pagesCount: number
}

export type PlaylistData = {
    data: PlaylistResourse[];
    meta: PlaylistsMeta
}  

export type FetchPlaylistsArgs = {
    pageNumber?: number;
    pageSize?: number;
    search?: string;
    sortBy?: 'addedAt' | 'likesCount';
    sortDirection?: 'asc' | 'desc';
    tagsIds?: string[];
    userId?: string;
    trackId?: string
}