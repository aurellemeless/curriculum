import { SimpleItem } from '~/app/types/SimpleItem';

export default function Other({ label }: SimpleItem) {
	return <div className='other-item'> {label}</div>;
}
