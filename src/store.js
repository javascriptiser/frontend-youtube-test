import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import appSlice from "./appSlice"
import authSlice from "./Components/LoginForm/authSlice"

const rootReducer = combineReducers({
	authReducer: authSlice,
	appReducer: appSlice
})

export const store = configureStore({
	reducer: rootReducer
})