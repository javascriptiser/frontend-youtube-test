import { useFormik } from 'formik'
import style from './style.module.css'




export const Favorite = ({ onCansel }) => {
	const onSubmit = (values) => {
		alert(values.query)
	}
	const formik = useFormik({
		initialValues: {
			query: '',
			caption: ''
		},
		onSubmit
	})

	return <div className={style.container}>
		<div className={style.container__inner}>
			<h3 className={style.header}>Сохранить запрос</h3>
			<form onSubmit={formik.handleSubmit} className={style.form__container}>
				<div className={style.inputs__container}>
					<label htmlFor="query" className={style.inputs__containerLabel}>Запрос</label>
					<input type="text" name={"query"}
						className={style.inputs__containerInput}
						value={formik.values.query}
						onChange={formik.handleChange}
						placeholder={''}
					/>
				</div>
				<div className={style.inputs__container}>
					<label htmlFor="caption" className={style.inputs__containerLabel}>Название</label>
					<input type="text" name={"caption"}
						className={style.inputs__containerInput}
						value={formik.values.caption}
						onChange={formik.handleChange}
						placeholder={''}
					/>
				</div>

				<div className={style.buttons__container}>
					<button onClick={onCansel}>
						Не сохранять
					</button>
					<button type={'submit'}>
						Cохранить
					</button>
				</div>
			</form>
		</div>
	</div>
}