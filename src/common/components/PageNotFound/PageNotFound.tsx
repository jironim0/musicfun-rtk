import s from './PageNotFound.module.css'

export function PageNotFounded(){
    return (
        <>
            <h1 className={s.titile}>404</h1>
            <h2 className={s.subtitle}>page not found</h2>
        </>
    )
}