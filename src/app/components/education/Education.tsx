import { EducationItem } from '~/app/types/EducationIntem';

export default function Education({ degree, location, school, start, end }: EducationItem) {
	return (
		<div className='education-item'>
			<div className='item-degree'>{degree} </div>
			<div className='item-school'>
				<div>{school}</div>
				<div> {location} </div>
			</div>
			<div>
				{start} - {end}
			</div>
		</div>
	);
}
