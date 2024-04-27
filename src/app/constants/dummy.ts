import { CVData } from '~/app/components/ui/curriculum/types';
import { ProfileItem } from '~/app/types/ProfileItem';
import { ContactItem } from '~/app/types/ContactItem';
import { EducationItem } from '~/app/types/EducationIntem';
import { ExperienceItem } from '~/app/types/ExperienceItem';
import { SimpleItem } from '../types/SimpleItem';

export const DUMMY_CONTACTS: ContactItem = {
	phone: '00 0000 000 00',
	address: '40, ed do eiusmod tempor incididunt ut labor',
	email: 'eiusmod.tempor@incididunt.ltd',
	linkedIn: 'http://ipsumdolorsit.amet',
};

export const DUMMY_EDU: EducationItem[] = [
	{
		id: 1,
		degree: 'MASTER DEGREE',
		school: 'University ipsum dolor',
		location: 'wanywhere',
		startDate: '2002',
		endDate: '2004',
	},
	{
		id: 2,
		degree: 'BACHELOR DEGREE',
		school: 'University ipsum dolor',
		location: 'wanywhere',
		startDate: '2002',
		endDate: '2004',
	},
	{
		id: 3,
		degree: 'HIGH SCHOOL DIPLOMA',
		school: 'University ipsum dolor',
		location: 'wanywhere',
		startDate: '2002',
		endDate: '2004',
	},
	{
		id: 4,
		degree: 'ELEMENTARY',
		school: 'University ipsum dolor',
		location: 'wanywhere',
		startDate: '2002',
		endDate: '2004',
	},
];

export const DUMMY_XP: ExperienceItem[] = [
	{
		id: 1,
		position: 'Job position on company position',
		company: 'company x lorem ipsuo',
		startDate: '2002',
		endDate: '2004',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
		incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
		nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
		Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
		fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
		culpa qui officia deserunt mollit anim id est laborum.`,
		location: 'wanywhere',
	},
	{
		id: 2,
		position: 'Job position on company position',
		company: 'company x lorem ipsuo',
		startDate: '2002',
		endDate: '2004',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
		incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
		nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
		Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
		fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
		culpa qui officia deserunt mollit anim id est laborum.`,
		location: 'wanywhere',
	},
	{
		id: 3,
		position: 'Job position on company position',
		company: 'company x lorem ipsuo',
		startDate: '2002',
		endDate: '2004',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
		incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
		nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
		Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
		fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
		culpa qui officia deserunt mollit anim id est laborum.`,
		location: 'wanywhere',
	},
	{
		id: 4,
		position: 'Job position on company position',
		company: 'company x lorem ipsuo',
		startDate: '2002',
		endDate: '2004',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
		incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
		nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
		Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
		fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
		culpa qui officia deserunt mollit anim id est laborum.`,
		location: 'wanywhere',
	},
	{
		id: 5,
		position: 'Job position on company position',
		company: 'company x lorem ipsuo',
		startDate: '2002',
		endDate: '2004',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
		incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
		nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
		Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
		fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
		culpa qui officia deserunt mollit anim id est laborum.`,
		location: 'wanywhere',
	},
];
export const DUMMY_SKILLS: SimpleItem[] = [
	{ id: 1, label: 'Lorem ipsum dolor sit amet' },
	{ id: 2, label: 'Lorem ipsum dolor sit amet' },
	{ id: 3, label: 'Lorem ipsum dolor sit amet' },
	{ id: 4, label: 'Lorem ipsum dolor sit amet' },
	{ id: 5, label: 'Lorem ipsum dolor sit amet' },
	{ id: 6, label: 'Lorem ipsum dolor sit amet' },
	{ id: 7, label: 'Lorem ipsum dolor sit amet' },
	{ id: 8, label: 'Lorem ipsum dolor sit amet' },
];

export const DUMMY_PROFILE: ProfileItem = {
	lastname: 'Rostow',
	firstname: 'Helena',
	position: 'PROFESSIONAL TITLE HERE',
	description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
    deserunt mollit anim id est laborum.`,
	image: '/user.png',
};

export const DUMMY_DATA: CVData = {
	experiences: DUMMY_XP,
	educations: DUMMY_EDU,
	skills: DUMMY_SKILLS,
	contacts: DUMMY_CONTACTS,
	profile: DUMMY_PROFILE,
};
