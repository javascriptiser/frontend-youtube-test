import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

import logo from '../../Assets/Images/logo.png'
import { setToken } from "../LoginForm/authSlice"
import style from './style.module.css'

let x = 0;
console.log(++x);
export const Header = () => {
	const dispatch = useDispatch();
	const removeToken = () => {
		localStorage.removeItem('auth')
		dispatch(setToken(null))
	}
	return <header className={style.container}>
		<img className={style.logo} src={logo} alt="logo" />
		<div className={style.search}><Link to="/">Поиск</Link></div>
		<div className={style.favorite}><Link to="/favorites">Избранное</Link></div>
		<div className={style.link}>
			<Link to="/login"
				onClick={removeToken}
			>Выйти</Link>
		</div>
	</header>
}