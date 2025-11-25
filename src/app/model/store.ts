import { playlistsApi } from "@/features/playlists/api/playlistsApi";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";


export const store = configureStore({
    reducer: {
        [playlistsApi.reducerPath]: playlistsApi.reducer
    },
    middleware: (getDefaultMiddlewere) => getDefaultMiddlewere().concat(playlistsApi.middleware)
})

setupListeners(store.dispatch)