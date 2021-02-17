import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import youtube from './api/youtube'

export const DISPLAY_STYLE_GRID = 'grid';
export const DISPLAY_STYLE_LIST = 'list';

export const fetchVideosByTerm = createAsyncThunk(
	'appSlice/fetchVideosByTerm',
	async (term) => {
		let response = await youtube.get('/search', {
			params: {
				part: 'snippet',
				q: term
			}
		})
		const count = response.data.pageInfo.totalResults;
		console.log(response);
		let result = '';
		for (const iterator of response.data.items) {
			result += `${iterator.id.videoId},`;
		}
		response = await youtube.get('/videos', {
			params: {
				part: 'contentDetails,statistics,snippet',
				id: result,
			}
		})
		return { items: response.data.items, count, term }
	}
)



const appSlice = createSlice({
	name: 'appSlice',
	initialState: {
		videos: [],
		displayStyle: 'grid', //grid || list
		count: null,
		term: null

	},
	reducers: {
		setDisplayStyle(state, action) {
			state.displayStyle = action.payload
		}
	},
	extraReducers: {
		[fetchVideosByTerm.fulfilled]: (state, action) => {
			state.videos = action.payload.items
			state.count = action.payload.count
			state.term = action.payload.term
		}
	}
})




export default appSlice.reducer
export const { setDisplayStyle } = appSlice.actions