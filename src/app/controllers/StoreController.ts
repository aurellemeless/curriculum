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
			const storeData = getLocalData(this.storageKey) || [];
			storeData.push(data);
			storeLocalData(this.storageKey, storeData);
		} else {
			storeLocalData(this.storageKey, data);
		}
	}

	remove(id: string | number) {
		if (this.isArray) {
			const storeData = getLocalData(this.storageKey) || [];
			storeLocalData(
				this.storageKey,
				storeData.filter((d: any) => d.id !== id)
			);
		}
	}
	getLocalData() {
		if (this.isArray) {
			return (getLocalData(this.storageKey) || []) as any[];
		}
		return getLocalData(this.storageKey) as any;
	}
}
