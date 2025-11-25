import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import type { PlaylistData } from "./playlistApi.types";


export const playlistsApi = createApi({
    reducerPath: 'playlistsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
        headers: {
            'API-KEY': import.meta.env.VITE_API_KEY
        }
    }),
    endpoints: (build) => ({
        fetchPlaylists: build.query<PlaylistData, void>({
            query: () => 'playlists'
        })
    }),
})

export const { useFetchPlaylistsQuery } = playlistsApi