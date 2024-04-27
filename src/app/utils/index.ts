import { LOCAL_STORAGE } from '../constants/constants';

export const storeLocalData = (key: string, data: any): void => {
	const storage = localStorage.getItem(LOCAL_STORAGE) ? localStorage.getItem(LOCAL_STORAGE) : null;
	if (storage) {
		const storedData = JSON.parse(storage);
		storedData[key] = data;
		localStorage.setItem(LOCAL_STORAGE, JSON.stringify(storedData));
	} else {
		localStorage.setItem(LOCAL_STORAGE, JSON.stringify({ [key]: data }));
	}
};

export const getLocalData = (key: string) => {
	const storage = localStorage.getItem(LOCAL_STORAGE) ? localStorage.getItem(LOCAL_STORAGE) : null;
	if (storage) {
		const storedData = JSON.parse(storage);
		return storedData[key];
	}
	return null;
};
