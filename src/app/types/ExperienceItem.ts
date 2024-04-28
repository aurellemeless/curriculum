import { Editable } from './Editable';

export interface ExperienceItem extends Editable {
	id?: any;
	position: string;
	company: string;
	startDate: string;
	endDate: string;
	description: string;
	location: string;
}
