import { Link } from "react-router-dom"

import logo from '../../Assets/Images/logo.png'
import style from './style.module.css'



export const Header = () => {

	return <header className={style.container}>
		<img className={style.logo} src={logo} alt="logo" />
		<div className={style.search}>Поиск</div>
		<div className={style.favorite}>Избранное</div>
		<div className={style.link}><Link to="/">Выйти</Link></div>
	</header>
}