import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setFavorites } from "./favoriteSlice";

export const Favorites = () => {
	const dispatch = useDispatch();
	const { list } = useSelector(state => state.favoriteReducer)
	useEffect(() => {
		const localList = JSON.parse(localStorage.getItem('favoriteQueries'))
		dispatch(setFavorites(localList))
	}, [dispatch])
	return <div>
		{list && list.map((item, index) => {
			return <div key={index}>
				{item.caption}
			</div>
		})}
	</div>
}