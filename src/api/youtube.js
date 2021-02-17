import axios from 'axios'
const KEY = 'AIzaSyACmVlrzwRLL0YaTvX7f1YMWaunVpiciWE'

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3/',
	params: {
		key: KEY,
		maxResults: 13,
	}
})