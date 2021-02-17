import { useEffect } from "react"
import { SearchDefault } from "../SearchDefault/SearchDefault"

export const SearchResult = ({ videos }) => {
	useEffect(() => {
		console.log(videos)
	}, [videos])
	if (!videos.length) return null;
	return <div>
		<SearchDefault />
		<Template videos={videos} />
	</div>
}

const Template = ({ videos }) => {
	return <div>
		{videos.map((item, index) => {
			return <div key={index}>
				<iframe width="560" height="315"				
				title={index}
				src={`https://www.youtube.com/embed/${item.id}`}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen>
			</iframe>
			<div>{item.snippet.title}</div>
			<div>{item.snippet.description}</div>
			<div>{item.statistics.viewCount}</div>
			</div>
		})}
	</div>
}