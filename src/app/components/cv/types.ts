import { ContactItem } from '~/app/types/ContactItem';
import { ProfileItem } from '~/app/types/ProfileItem';

export interface CVData {
	experiences: any[];
	educations: any[];
	skills: any[];
	contacts: ContactItem;
	profile: ProfileItem;
}
