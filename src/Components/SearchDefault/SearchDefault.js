import style from './style.module.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchVideosByTerm } from '../../appSlice'
import { Favorite } from '../Modals/Favorite'

export const SearchDefault = () => {
	const dispatch = useDispatch();
	const [inputValue, setInputValue] = useState('')
	const [showModal, setShowModal] = useState(false);
	const handleChange = (event) => {
		setInputValue(event.target.value)
	}

	const handleSubmit = () => {
		dispatch(fetchVideosByTerm(inputValue))
	}
	if (showModal) return <Favorite onCansel={() => setShowModal(!showModal)} />
	return <div className={style.container}>
		<h3>Поиск видео</h3>
		<div>
			<input type="text" onChange={handleChange} value={inputValue} />
			<button onClick={handleSubmit}>Найти</button>
			<button onClick={() => setShowModal(!showModal)}>Favorite</button>
		</div>
	</div>
}