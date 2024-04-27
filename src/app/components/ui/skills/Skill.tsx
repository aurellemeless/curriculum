import { SimpleItem } from '~/app/types/SimpleItem';

export default function Skill({ label }: SimpleItem) {
	return <div className='skills-item'> {label}</div>;
}
