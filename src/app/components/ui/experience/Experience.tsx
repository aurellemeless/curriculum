import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { LOCAL_STORAGE_EXPERIENCES } from '~/app/constants/constants';
import { StoreController } from '~/app/controllers/StoreController';
import { ExperienceItem } from '~/app/types/ExperienceItem';

export default function Experience({
	id,
	description,
	startDate,
	endDate,
	company,
	location,
	position,
	editable = false,
}: ExperienceItem) {
	const storeController = new StoreController(LOCAL_STORAGE_EXPERIENCES, true);

	const [modal, contextHolder] = Modal.useModal();

	const handleOnOk = () => {
		storeController.remove(id as any);
	};

	const handleOnCancel = () => {};

	const handleOnRemove = async (ev: any) => {
		ev.preventDefault();
		modal.confirm({
			title: 'Confirm',
			icon: <ExclamationCircleOutlined />,
			content: 'Do you really want to remove this item from experience section ?',
			okText: 'Remove',
			cancelText: 'Cancel',
			onOk: handleOnOk,
			onCancel: handleOnCancel,
		});
	};
	return (
		<div className='experience-item'>
			<div className='experience-position'> {position}</div>
			<div className='experience-meta'>
				<div className='experience-company'> {company}</div>
				<div className='experience-location'> {location}</div>
				<div className='experience-period'>{`${startDate} - ${endDate}`}</div>
			</div>
			<div className='experience-description'>{description}</div>
			{editable && (
				<div className='action'>
					<Button size='small' icon={<DeleteOutlined />} onClick={handleOnRemove}>
						remove
					</Button>
					<Button size='small' icon={<EditOutlined />}>
						edit
					</Button>
				</div>
			)}
			{contextHolder}
		</div>
	);
}
