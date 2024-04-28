import { Editable } from './Editable';

export interface ContactItem extends Editable {
	phone: string;
	address: string;
	email: string;
	linkedIn?: string;
	youtube?: string;
	github?: string;
}
