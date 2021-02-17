import { useEffect } from "react"
import { SearchDefault } from "../SearchDefault/SearchDefault"

export const SearchResult = ({ displayStyle, videos }) => {
	useEffect(() => {
		console.log(videos)
	}, [videos])
	return <div>
		<SearchDefault />
		{videos.map((item, index) => {
			return <iframe width="560" height="315"
				key={index}
				title={index}
				src={`https://www.youtube.com/embed/${item.id.videoId}`}
				frameBorder="0"
				//allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen>
			</iframe>
		})}
	</div>
}