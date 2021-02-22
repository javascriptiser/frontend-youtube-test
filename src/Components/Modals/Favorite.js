import { Slider } from '@material-ui/core'
import { useFormik } from 'formik'
import { useState } from 'react'
import style from './style.module.css'




export const Favorite = ({ onCansel, query }) => {
	const [value, setValue] = useState(5);
	const handleSliderChange = (event, newValue) => {
		setValue(newValue);
	};
	const onSubmit = (values) => {
		let favoriteQueries = [{
			query: values.query,
			caption: values.caption,
			maxResults: value
		}]
		let oldValue = JSON.parse(localStorage.getItem('favoriteQueries'));
		let newValue = oldValue ? oldValue.concat(favoriteQueries) : favoriteQueries;
		localStorage.setItem('favoriteQueries', JSON.stringify(newValue))
		onCansel();
	}
	const validate = (values) => {
		const errors = {};
		if (!values.caption) {
			errors.caption = '*';
		}
		if (!values.query) {
			errors.query = '*';
		}
		return errors;
	}
	const formik = useFormik({
		initialValues: {
			query,
			caption: ''
		},
		validate,
		onSubmit
	})

	return <div className={style.container}>
		<div className={style.container__inner}>
			<h3 className={style.header}>Сохранить запрос</h3>
			<form onSubmit={formik.handleSubmit} className={style.form__container}>
				<div className={style.inputs__container}>
					<label htmlFor="query"
						className={formik.errors.query
							? `${style.inputs__containerLabel} ${style.error}`
							: `${style.inputs__containerLabel}`}
					>Запрос</label>
					<input type="text" name={"query"}
						className={style.inputs__containerInput}
						value={formik.values.query}
						onChange={formik.handleChange}
						placeholder={''}
					/>
				</div>
				<div className={style.inputs__container}>
					<label htmlFor="caption"
						className={formik.errors.caption
							? `${style.inputs__containerLabel} ${style.error}`
							: `${style.inputs__containerLabel}`}

					>Название</label>
					<input type="text" name={"caption"}
						className={style.inputs__containerInput}
						value={formik.values.caption}
						onChange={formik.handleChange}
						placeholder={''}
					/>
				</div>
				<div>
					<Slider
						value={typeof value === 'number' ? value : 0}
						onChange={handleSliderChange}
						aria-labelledby="input-slider"
						min={5}
						max={25}
					/>
					<span>{value}</span>
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