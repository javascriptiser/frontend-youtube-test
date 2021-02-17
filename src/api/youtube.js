import axios from 'axios'
const KEY = 'AIzaSyBJpJyvmI0BvKJKCr_ELlAjOHrYwssbnWE'

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3/',
	params: {
		part: 'snippet',
		maxResult: 5,
		key: KEY
	}
})