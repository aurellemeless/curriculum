import { ContactItem } from '~/app/types/ContactItem';

export default function Contact({ address, email, phone, linkedIn }: ContactItem) {
	return (
		<div className='contact'>
			<div className='contact-item'>{address}</div>
			<div className='contact-item'>{email}</div>
			<div className='contact-item'>{phone}</div>
			<div className='contact-item'> {linkedIn}</div>
			<div className='contact-item'>{linkedIn}</div>
		</div>
	);
}
