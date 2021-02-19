import { useSelector } from "react-redux"
import style from './style.module.css'

const FilterPanel = ({ count, term, displayStyle }) => {
	return <div className={style.filter__container}>
		<div className={style.filter__containerText}>
			Видео по запросу "{term}" <span className={style.transparent}>{count}</span>
		</div>
		<div className={style.filter__container_inner}>
			<button>Grid</button>
			<button>List</button>
		</div>
	</div>
}

export const SearchResult = ({ videos }) => {
	const { count, term, displayStyle } = useSelector(state => state.appReducer)
	return <>
		<FilterPanel count={count} term={term} displayStyle={displayStyle} />
		<Template videos={videos} />
	</>
}

const Template = ({ videos }) => {
	const maxCharacterCount = 40;
	return <div className={style.container}>

		<div className={style.container__inner}>
			{videos.map((item, index) => {
				return <div key={index} className={style.container__innerItem}>
					<iframe
						title={index}
						src={`https://www.youtube.com/embed/${item.id}?showinfo=0&controls=1`}
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						controls={0}
						allowFullScreen>
					</iframe>
					<div>{item.snippet.title}</div>
					<div className={style.transparent}>{item.snippet.description.slice(0, maxCharacterCount)}</div>
					<div>{item.statistics.viewCount} Просмотров</div>
				</div>
			})}
		</div>
	</div>
}