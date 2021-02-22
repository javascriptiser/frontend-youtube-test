import { createSlice } from "@reduxjs/toolkit";



const authSlice = createSlice({
	name: 'authSlice',
	initialState: {
		isAuth: false,
		token: null
	},
	reducers: {
		setIsAuth(state, action) {
			const { token, isAuth } = action.payload
			state.isAuth = isAuth;
			state.token = JSON.stringify(token)
			window.localStorage.setItem('auth', `token:${state.token}`)
		},
		setToken(state, action) {
			state.token = action.payload
		}
	}
})
export const { setIsAuth, setToken } = authSlice.actions
export default authSlice.reducer