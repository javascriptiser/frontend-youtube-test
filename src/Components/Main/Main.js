import { useSelector } from "react-redux"
import { DISPLAY_STYLE_GRID } from "../../appSlice"
import { FilterPanel } from "../FilterPanel/FilterPanel"
import { MainInput } from "../MainInput/MainInput"
import style from './style.module.css'


export const Main = () => {
	const { videos, displayStyle, count, term } = useSelector(state => state.appReducer)
	if (!videos.length > 0) return <MainInput />
	return <>
		<MainInput />
		<FilterPanel count={count} term={term} displayStyle={displayStyle} />
		<VideosList videos={videos} displayStyle={displayStyle} />
	</>
}


const VideosList = ({ videos, displayStyle }) => {
	const maxCharacterCount = 80;
	return <div className={style.container}>
		<div className={displayStyle === DISPLAY_STYLE_GRID ? style.container__innerGrid : style.container__innerList}>
			{videos.map((item, index) => {
				return <div key={index} className={displayStyle === DISPLAY_STYLE_GRID ? style.container__innerItemGrid : style.container__innerItemList}>
					<iframe
						title={index}
						src={`https://www.youtube.com/embed/${item.id}?showinfo=0&controls=1`}
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						controls={0}
						allowFullScreen>
					</iframe>
					<div className={style.innerItemText}>
						<div className={style.innerItemTitleText}>{item.snippet.title.slice(0, maxCharacterCount)}</div>
						<div className={style.innerItemDescriptionText}>{item.snippet.description.slice(0, maxCharacterCount)}</div>
						<div className={style.innerItemStatisticsText}>{item.statistics.viewCount} Просмотров</div>
					</div>
				</div>
			})}
		</div>
	</div>
}