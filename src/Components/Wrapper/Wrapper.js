import { Header } from '../Header/Header'
import style from './style.module.css'

export const Wrapper = ({ children }) => {

	return <div className={style.container}>
		<Header />
		<div className={style.container__body}>
			{children}
		</div>
	</div>
}	