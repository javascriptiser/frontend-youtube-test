import { useEffect } from "react"
import { useSelector } from "react-redux"
import style from './style.module.css'

export const SearchResult = ({ videos }) => {
	const { count, term } = useSelector(state => state.appReducer)
	return <>
		<Template videos={videos} count={count} term={term} />
	</>
}

const Template = ({ videos, count, term }) => {
	const maxCharacterCount = 40;
	return <div className={style.container}>
		<div>Видео по запросу "{term}" <span className={style.transparent}>{count}</span></div>
		<div className={style.container__inner}>
			{videos.map((item, index) => {
				return <div key={index}>
					<div>
						<iframe
							title={index}
							src={`https://www.youtube.com/embed/${item.id}?showinfo=0&controls=1`}
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							controls={0}
							allowFullScreen>
						</iframe>
					</div>
					<div>{item.snippet.title}</div>
					<div className={style.transparent}>{item.snippet.description.slice(0, maxCharacterCount)}</div>
					<div>{item.statistics.viewCount} Просмотров</div>
				</div>
			})}
		</div>
	</div>
}