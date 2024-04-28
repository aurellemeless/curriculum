import { Editable } from './Editable';

export interface EducationItem extends Editable {
	id?: any;
	degree: string;
	school: string;
	location: string;
	startDate: string;
	endDate: string;
}
