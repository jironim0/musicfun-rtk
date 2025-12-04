import { useFormik } from 'formik'
import s from './s.module.css'
import * as Yup from 'yup'
import { useCreatePlaylistMutation } from '../../api/playlistsApi'

const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required')
})

export function CreatePlaylistForm () {

    const [ createPlaylist ] = useCreatePlaylistMutation()

    const formik = useFormik({
        initialValues: {
            title: '',
            description: ''
        },
        validationSchema,
        onSubmit: (val) => {
            try {
                createPlaylist(val).then(() => {
                    const { resetForm } = formik
                    resetForm()
                })
                alert('Playlist added')
            } catch (error) {
                alert("Error 400 bad request")
                console.log('EEE:',  error)
            }
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} className={s.container}>
            <div>
                <input className={s.input} id='title' name='title' type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.title}/>
                {formik.touched.title && formik.errors.title ? (<div className={s.error}>{formik.errors.title}</div>) : null}
            </div>

            <div>
                <input className={s.input} id='description' name='description' type="text" onChange={formik.handleChange} value={formik.values.description}/>
                {formik.touched.title && formik.errors.description ? (<div className={s.error}>{formik.errors.description}</div>) : null}
            </div>

            <button className={s.button} type='submit'>Create Playlist</button>
        </form>
    )
    
}