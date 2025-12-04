import { useFormik } from "formik";
import type { JSX } from "react";
import { useUpdatePlaylistMutation } from "../../api/playlistsApi";
import type { PlaylistData } from "../../api/playlistApi.types";

interface EditePlaylistFromProps {
  playlist: PlaylistData;
  playlistId: string;
  onEditCancel: () => void; // ← Колбек для закрытия формы
}

export function EditePlaylistFrom({ 
  playlist, 
  playlistId, 
  onEditCancel 
}: EditePlaylistFromProps): JSX.Element {

  const [updatePlaylist] = useUpdatePlaylistMutation();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: playlist.attributes.title || "",
      description: playlist.attributes.description || "",
    },
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        await updatePlaylist({
          playlistId, 
          body: {
            title: values.title,
            description: values.description,
            tagIds: playlist.attributes.tags?.map(tag => tag.id) || []
          }
        }).unwrap(); // ← Не забудьте unwrap()
        
        resetForm({
          values: {
            title: values.title,
            description: values.description
          }
        });
        
        onEditCancel(); // ← Закрываем форму после успешного обновления
        
      } catch (error) {
        console.log("Update error:", error);
      } finally {
        setSubmitting(false);
      }
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input 
          type="text" 
          name="title" 
          value={formik.values.title} 
          onChange={formik.handleChange}
        />
        <input 
          type="text" 
          name="description" 
          value={formik.values.description} 
          onChange={formik.handleChange}
        />
        
        {/* Кнопки обновления и отмены */}
        <button type="submit" disabled={formik.isSubmitting}>
          {formik.isSubmitting ? "Updating..." : "Update"}
        </button>
        
        <button 
          type="button" 
          onClick={onEditCancel} // ← Кнопка отмены
        >
          Cancel
        </button>
      </form>
    </div>
  );
}