import { useFetchPlaylistsQuery } from "../api/playlistsApi"
import { CreatePlaylistForm } from "./CreatePlaylistForm/CreatePlaylistForm"
import s from './style.module.css'

export function PlaylistPage(){

    const {data, isLoading} = useFetchPlaylistsQuery()

    if(isLoading) return <h1>Spiner...</h1>

    return (
        <div className={s.container}>
            
            <h1>PlaylistPage</h1>

            <CreatePlaylistForm/>
            
            <div className={s.items}>
                {data?.data.map((playlist) => (
                    <div className={s.item} key={playlist.id}>{playlist.attributes.title}</div>
                ))
                }
            </div>
        </div>

    )
}