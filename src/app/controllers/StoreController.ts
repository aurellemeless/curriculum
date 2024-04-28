import { getLocalData, storeLocalData } from '../utils';

export class StoreController {
	storageKey: string;
	isArray: boolean;
	constructor(storageKey: string, isArray: boolean = false) {
		this.storageKey = storageKey;
		this.isArray = isArray;
	}

	save(data: any) {
		if (this.isArray) {
			const experiences = getLocalData(this.storageKey) || [];
			experiences.push(data);
			storeLocalData(this.storageKey, experiences);
		} else {
			storeLocalData(this.storageKey, data);
		}
	}

	getLocalData() {
		if (this.isArray) {
			return (getLocalData(this.storageKey) || []) as any[];
		}
		return getLocalData(this.storageKey) as any;
	}
}
