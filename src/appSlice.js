import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import youtube from './api/youtube'

export const DISPLAY_STYLE_GRID = 'grid';
export const DISPLAY_STYLE_LIST = 'list';

export const fetchVideosByTerm = createAsyncThunk(
	'appSlice/fetchVideosByTerm',
	async (term) => {
		const response = await youtube.get('/search', {
			params: {
				q: term
			}
		})
		return response.data.items
	}
)

const appSlice = createSlice({
	name: 'appSlice',
	initialState: {
		videos: [],
		displayStyle: 'grid' //grid || list
	},
	reducers: {
		setDisplayStyle(state, action) {
			state.displayStyle = action.payload
		}
	},
	extraReducers: {
		[fetchVideosByTerm.fulfilled]: (state, action) => {
			state.videos = action.payload
		}
	}
})




export default appSlice.reducer
export const { setDisplayStyle } = appSlice.actions