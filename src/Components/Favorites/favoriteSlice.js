import { createSlice } from "@reduxjs/toolkit";


const favoriteSlice = createSlice({
	name: 'favoriteSlice',
	initialState: {
		list: [{
			query: '',
			caption: '',
			maxResults: 5,
		}]
	},
	reducers: {
		setFavorites(state, action) {
			state.list = action.payload
		}
	}
})

export default favoriteSlice.reducer
export const { setFavorites } = favoriteSlice.actions