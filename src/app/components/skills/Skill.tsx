import { SkillItem } from './types';

export default function Skill({ label }: SkillItem) {
	return <div className='skills-item'> {label}</div>;
}
