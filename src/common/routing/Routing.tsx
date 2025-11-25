import { MainPage } from "@/app/ui/MainPage/MainPage"
import { PlaylistPage } from "@/features/playlists/ui/PlaylistPage"
import { TracksPage } from "@/features/tracks/ui/TracksPage"
import { Route, Routes } from "react-router"

export const Path = {
    Main: '/',
    Playlists: '/playlists',
    Tracks: '/tracks',
    Profile: '/profile',
    NotFound: '*'
} as const

export const Routing = () => (
    <Routes>
        <Route path={Path.Main} element={<MainPage/>}/>
        <Route path={Path.Playlists} element={<PlaylistPage/>}/>
        <Route path={Path.Tracks} element={<TracksPage/>}/>
        <Route path={Path.Main} element={<MainPage/>}/>
        <Route path={Path.Main} element={<MainPage/>}/>
    </Routes>
)