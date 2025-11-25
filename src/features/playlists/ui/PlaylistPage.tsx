import { useFetchPlaylistsQuery } from "../api/playlistsApi"

export function PlaylistPage(){

    const {data, isLoading} = useFetchPlaylistsQuery()

    if(isLoading) return <h1>Spiner...</h1>

    return (
        <>
            <div>PlaylistPage</div>
            <div>
                {data?.data.map((playlist) => (
                    <div key={playlist.id}>{playlist.attributes.title}</div>
                ))
                }
            </div>
        </>

    )
}