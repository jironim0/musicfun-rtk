import { Path } from '@/common/routing/Routing'
import { NavLink } from 'react-router'
import s from './Heaber.module.css'

const navItems = [
    {to: Path.Main, label: 'Main'},
    {to: Path.Playlists, label: 'Playlists'},
    {to: Path.Tracks, label: 'Tracks'},
    {to: Path.Profile, label: 'Profile'},
]

export function Header(){
  return (
    <header className={s.container}>
        <nav>
            <ul className={s.list}>
                {navItems.map((item) => (
                    <li key={item.to}>
                        <NavLink to={item.to}>{item.label}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  )
}
