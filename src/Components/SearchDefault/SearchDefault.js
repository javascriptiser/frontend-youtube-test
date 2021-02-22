import style from './style.module.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchVideos } from '../../appSlice'
import { Favorite } from '../Modals/Favorite'

export const SearchDefault = () => {
	const dispatch = useDispatch();
	const [inputValue, setInputValue] = useState('')
	const [showModal, setShowModal] = useState(false);
	const handleChange = (event) => {
		setInputValue(event.target.value)
	}

	const handleSubmit = () => {
		dispatch(fetchVideos({ term: inputValue, maxResults: 12 }))
	}
	if (showModal) return <Favorite onCansel={() => setShowModal(!showModal)} />
	return <div className={style.container}>
		<h3>Поиск видео</h3>
		<div className={style.container__inner}>
			<input type="text" onChange={handleChange} value={inputValue} />
			<button onClick={() => setShowModal(!showModal)}
				className={style.favoriteButton}
			>Favorite</button>
			<button onClick={handleSubmit}>Найти</button>
		</div>
	</div>
}