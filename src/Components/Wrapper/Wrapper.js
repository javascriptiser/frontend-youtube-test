

import { useSelector } from 'react-redux'
import { Header } from '../Header/Header'
import { SearchDefault } from '../SearchDefault/SearchDefault'
import { SearchResult } from '../SearchResult/SearchResult'
import style from './style.module.css'


export const Wrapper = () => {
	const { videos, displayStyle } = useSelector(state => state.appReducer)
	return <div className={style.container}>
		<Header />
		<div className={style.container__inner}>
			<SearchDefault />
			{videos.length > 0 && <SearchResult videos={videos} displayStyle={displayStyle} />}
		</div>
	</div>
}	