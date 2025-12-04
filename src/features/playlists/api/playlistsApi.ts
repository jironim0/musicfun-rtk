import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import type {
  CreatePlaylistRequest,
  PlaylistData,
  PlaylistResponse,
  UpdatePlaylistArgs,
} from "./playlistApi.types";

export const playlistsApi = createApi({
  reducerPath: "playlistsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    headers: {
      "API-KEY": import.meta.env.VITE_API_KEY,
    },
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
      );
      return headers;
    },
  }),
  endpoints: (build) => ({
    fetchPlaylists: build.query<PlaylistResponse, void>({
      query: () => "playlists",
    }),
    createPlaylist: build.mutation<{ data: PlaylistData },CreatePlaylistRequest>({
      query: (body) => ({
        url: "playlists",
        method: "post",
        body,
      }),
    }),
    deletePlylist: build.mutation<void, string>({
      query: (playlistId) => ({
        url: `playlists/${playlistId}`,
        method: "delete",
      }),
    }),
    updatePlaylist: build.mutation<void, {playlistId: string; body: UpdatePlaylistArgs}>({
        query: ({playlistId, body}) => ({
            url: `playlists/${playlistId}`,
            method: "put",
            body
        })
    })
  }),
});

export const { 
    useFetchPlaylistsQuery, 
    useCreatePlaylistMutation,
    useDeletePlylistMutation,
    useUpdatePlaylistMutation
    } = playlistsApi;
