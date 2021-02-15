import style from './loginForm.module.css'
import logo from '../../Assets/Images/logo.png'

export const LoginForm = () => {
	return <div className={style.container}>
		<div className={style.container__inner}>
			<img src={logo} alt="logo" />
			<h3>Вход</h3>
			<div className={style.input__wrapper}>
				<label className={style.input__wrapperLabel} htmlFor="login">Логин</label>
				<input className={style.input__wrapperInput} type="text" name="login" />
			</div>
			<div className={style.input__wrapper}>
				<label className={style.input__wrapperLabel} htmlFor="password">Пароль</label>
				<input className={style.input__wrapperInput} type="password" name="password" />
			</div>
			<button className={style.btn}>Войти</button>
		</div>
	</div>
}

