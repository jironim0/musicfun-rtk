import { useState } from "react";
import {
  useDeletePlylistMutation,
  useFetchPlaylistsQuery,
} from "../api/playlistsApi";
import { CreatePlaylistForm } from "./CreatePlaylistForm/CreatePlaylistForm";
import s from "./style.module.css";
import { EditePlaylistFrom } from "./EditePlaylistForm/EditePlaylistFrom";

export function PlaylistPage() {
  const [editingId, setEditingId] = useState<null | string>(null);

  const { data, isLoading } = useFetchPlaylistsQuery();
  const [deletePlaylist] = useDeletePlylistMutation();

  const deleteUnicPlaylist = (playlistId: string) => {
    if (confirm("Are u sure u want to delete the playlist?"))
      deletePlaylist(playlistId);
  };

  const startEditing = (id: string) => {
    setEditingId(id);
  };

  const stopEditing = () => {
    setEditingId(null);
  };

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className={s.container}>
      <h1>PlaylistPage</h1>

      <CreatePlaylistForm />

      <div className={s.items}>
        {data?.data.map((playlist) => {
          const isEditing = editingId === playlist.id;
          
          return (
            <div className={s.item} key={playlist.id}>
              {isEditing ? (
                <EditePlaylistFrom
                  playlist={playlist}
                  playlistId={playlist.id}
                  onEditCancel={stopEditing}
                />
              ) : (
                <div>
                  <div>{playlist.attributes.title}</div>
                  <div>{playlist.attributes.description}</div>
                  <div>{playlist.attributes.user.name}</div>
                  <div className={s.button_group}>
                    <button onClick={() => deleteUnicPlaylist(playlist.id)}>
                      Delete
                    </button>
                    <button onClick={() => startEditing(playlist.id)}>
                      Edit
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}