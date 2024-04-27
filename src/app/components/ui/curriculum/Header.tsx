import { ProfileItem } from '~/app/types/ProfileItem';

export default function Header({ name, position, image }: ProfileItem) {
	return (
		<div className='header'>
			<div>
				<div className='name'>{name}</div>
				<div className='title'>{position}</div>
			</div>
			{image && (
				<div className='photo'>
					<div>
						<img src={image} />
					</div>
				</div>
			)}
		</div>
	);
}
