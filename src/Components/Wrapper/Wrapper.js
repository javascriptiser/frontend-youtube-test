

import { useSelector } from 'react-redux'
import { DISPLAY_STYLE_GRID, DISPLAY_STYLE_LIST } from '../../appSlice'
import { Header } from '../Header/Header'
import { SearchDefault } from '../SearchDefault/SearchDefault'
import { SearchResult } from '../SearchResult/SearchResult'
import style from './style.module.css'


export const Wrapper = () => {
	const { videos, displayStyle } = useSelector(state => state.appReducer)
	return <div className={style.container}>
		<Header />
		<div className={style.container__inner}>
			{!videos.length && <SearchDefault />}
			{displayStyle === DISPLAY_STYLE_GRID ? <SearchResult displayStyle={displayStyle} videos={videos} /> : null}
			{displayStyle === DISPLAY_STYLE_LIST ? <SearchResult displayStyle={displayStyle} videos={videos} /> : null}
		</div>
	</div>
}	