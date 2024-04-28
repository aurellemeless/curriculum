import { Editable } from './Editable';

export interface ProfileItem extends Editable {
	id?: any;
	firstname: string;
	lastname: string;
	position: string;
	description?: string;
	image?: string;
}
