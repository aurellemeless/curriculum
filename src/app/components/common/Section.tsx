import { SectionItem } from './types';

export default function Section({ title, children, ...otherProps }: SectionItem) {
	return (
		<div {...otherProps}>
			<h1 className='title'> {title}</h1>
			<div> {children} </div>
		</div>
	);
}
