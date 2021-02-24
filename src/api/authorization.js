import localDbFile from '../Assets/localDB.json'
export const authorization = (data) => {
	for (const item of localDbFile) {
		if (data.login === item.login && data.password === item.password) {
			return true;
		}
	}
	return false;
}