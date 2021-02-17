import { useSelector } from "react-redux"




export const useAuthData = () => {
	const authData = useSelector(state => state.authReducer)
	return authData
}