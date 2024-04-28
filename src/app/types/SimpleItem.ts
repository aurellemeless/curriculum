import { Editable } from './Editable';

export interface SimpleItem extends Editable {
	id?: any;
	label: string;
}
