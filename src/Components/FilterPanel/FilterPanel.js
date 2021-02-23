import React from "react";
import { useDispatch } from "react-redux";
import { DISPLAY_STYLE_GRID, DISPLAY_STYLE_LIST, setDisplayStyle } from "../../appSlice";
import style from './style.module.css'


const GridSvg = ({ handleClick }) => {
	return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleClick}
		className={style.gridSvg}
	>
		<g opacity="0.3">
			<path d="M10 5H5V10H10V5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M19 5H14V10H19V5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M19 14H14V19H19V14Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M10 14H5V19H10V14Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
		</g>
	</svg>
}
const ListSvg = ({ handleClick }) => {
	return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleClick}
		className={style.listSvg}>
		<path d="M8 6H21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
		<path d="M8 12H21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
		<path d="M8 18H21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
		<path d="M3 6H3.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
		<path d="M3 12H3.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
		<path d="M3 18H3.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
}



export const FilterPanel = ({ count, term }) => {
	const dispatch = useDispatch();
	return <div className={style.filter__container}>
		<div className={style.filter__containerText}>
			Видео по запросу "{term}" <span className={style.transparentText}>{count}</span>
		</div>
		<div className={style.filter__container_inner}>
			<GridSvg handleClick={() => dispatch(setDisplayStyle(DISPLAY_STYLE_GRID))} />
			<ListSvg handleClick={() => dispatch(setDisplayStyle(DISPLAY_STYLE_LIST))} />
		</div>
	</div>
}