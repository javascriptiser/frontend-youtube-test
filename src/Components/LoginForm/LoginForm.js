import style from './loginForm.module.css'
import logo from '../../Assets/Images/logo.png'
import hiddenPasswordIcon from '../../Assets/Images/hiddenPasswordIcon.svg'
import showedPasswordIcon from '../../Assets/Images/showedPasswordIcon.svg'
import { useEffect, useState } from 'react'

export const LoginForm = () => {
	const [state, setState] = useState({
		passwordVisible: false,
		type: "password"
	});
	const toggle = () => {
		setState({
			passwordVisible: !state.passwordVisible,
			type: state.passwordVisible ? "password" : "text"
		})
	}



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
				<input className={style.input__wrapperInput}
					type={state.type}
					name="password" />
				<span className={style.password}>
					{state.passwordVisible
						? <img src={showedPasswordIcon} alt="showedPasswordIcon" onClick={toggle} />
						: <img src={hiddenPasswordIcon} alt="hiddenPasswordIcon" onClick={toggle} />}
				</span>
			</div>
			<button className={style.btn}>Войти</button>
		</div>
	</div>
}

