import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setFavorites } from "./favoriteSlice";
import style from './style.module.css'

export const Favorites = () => {
	const dispatch = useDispatch();
	const { list } = useSelector(state => state.favoriteReducer)
	useEffect(() => {
		const localList = JSON.parse(localStorage.getItem('favoriteQueries'))
		dispatch(setFavorites(localList))
	}, [dispatch])
	return <div className={style.container}>
		<div className={style.container__header}>
			<h3>Избранное</h3>
		</div>
		<div className={style.container__items}>
			{list && list.map((item, index) => {
				return <div key={index} className={style.container__itemsItem}>
					{item.caption}
				</div>
			})}
		</div>
	</div>
}