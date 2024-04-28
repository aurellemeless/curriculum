'use client';
import { Tabs, TabsProps } from 'antd';
import ProfileForm from '../profile/ProfileForm';
import ContactForm from '../contact/ContactForm';
import EducationForm from '../education/EducationForm';
import ExperienceForm from '../experience/ExperienceForm';
import OtherForm from '../other/OtherForm';
import SkillForm from '../skills/SkillForm';
const onChange = (key: string) => {
	console.log(key);
};

const items: TabsProps['items'] = [
	{
		key: '1',
		label: 'Profile',
		children: <ProfileForm />,
	},
	{
		key: '2',
		label: 'Contacts',
		children: <ContactForm />,
	},
	{
		key: '3',
		label: 'Education',
		children: <EducationForm />,
	},
	{
		key: '4',
		label: 'Work Experience',
		children: <ExperienceForm />,
	},
	{
		key: '5',
		label: 'Skills',
		children: <SkillForm />,
	},
	{
		key: '6',
		label: 'Others',
		children: <OtherForm />,
	},
];

export function App() {
	return (
		<div>
			<div>
				<h1>Resume wizard</h1>
				<div style={{ paddingBottom: 10 }}>
					Details of your resume, fill informations to get a beautifull resume
				</div>
			</div>
			<div>
				<Tabs defaultActiveKey='1' items={items} onChange={onChange} />
			</div>
		</div>
	);
}
