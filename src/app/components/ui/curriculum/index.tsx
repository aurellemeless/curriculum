'use client';
import '~/app/page.module.css';
import Experience from '~/app/components/ui/experience/Experience';
import Education from '~/app/components/ui/education/Education';
import Skill from '~/app/components/ui/skills/Skill';
import Contact from '~/app/components/ui/contact/Contact';
import Section from '~/app/components/common/Section';
import Header from './Header';
import { CVData } from './types';

export default function Curriculum({ experiences, educations, skills, contacts, profile }: CVData) {
	return (
		<div className='cv-wrapper'>
			<Header {...profile} />
			<div id='gray-rectangle' className='gray-rectangle'></div>
			<div className='body'>
				<div className='body-left'>
					<div className='left-box'>
						<Section title='Contact'>
							<Contact {...contacts} />
						</Section>
						<div className='separator'></div>
						<Section title='Education'>
							{educations.map((edu) => (
								<Education key={edu.id} {...edu} />
							))}
						</Section>
						<div className='separator'></div>
						<Section title='Skills'>
							<div className='skills'>
								{skills.map(({ id, label }) => (
									<Skill key={id} label={label} />
								))}
							</div>
						</Section>
					</div>
				</div>
				<div className='body-right'>
					<div className='right-box'>
						<Section id='profile' title='Profile'>
							{profile.description}
						</Section>

						<Section title='Work experience'>
							{experiences.map((xp) => (
								<Experience key={xp.id} {...xp} />
							))}
						</Section>
					</div>
				</div>
			</div>
		</div>
	);
}
