import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import appSlice from "./appSlice"
import favoriteSlice from "./Components/Favorites/favoriteSlice"
import authSlice from "./Components/LoginForm/authSlice"
const rootReducer = combineReducers({
	authReducer: authSlice,
	appReducer: appSlice,
	favoriteReducer: favoriteSlice
})

export const store = configureStore({
	reducer: rootReducer
})