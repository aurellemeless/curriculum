'use client';

import { ProfileItem } from '~/app/types/ProfileItem';
import { getLocalData, storeLocalData } from '~/app/utils';

export default class ProfileController {
	public static save(data: any) {
		console.log('ProfileController - save ', data);
		storeLocalData('profile', data);
	}

	public static getLocalData() {
		getLocalData('profile');
		console.log('ProfileController - getLocalData ', getLocalData('profile'));
		return getLocalData('profile') as ProfileItem;
	}
}
