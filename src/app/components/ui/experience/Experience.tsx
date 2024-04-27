import { ExperienceItem } from '~/app/types/ExperienceItem';

export default function Experience({
	description,
	startDate,
	endDate,
	company,
	location,
	position,
}: ExperienceItem) {
	return (
		<div className='experience-item'>
			<div className='experience-position'> {position}</div>
			<div className='experience-meta'>
				<div className='experience-company'> {company}</div>
				<div className='experience-location'> {location}</div>
				<div className='experience-period'>{`${startDate} - ${endDate}`}</div>
			</div>
			<div className='experience-description'>{description}</div>
		</div>
	);
}