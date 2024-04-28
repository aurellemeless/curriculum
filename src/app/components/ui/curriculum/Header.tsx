import { ProfileItem } from '~/app/types/ProfileItem';

export default function Header({ firstname, lastname, position, image }: ProfileItem) {
	return (
		<div className='header'>
			<div>
				<div className='name'>{`${firstname} ${lastname}`}</div>
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
