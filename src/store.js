import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import authSlice from "./Components/LoginForm/authSlice"

const rootReducer = combineReducers({
	authReducer: authSlice
})

export const store = configureStore({
	reducer: rootReducer
})