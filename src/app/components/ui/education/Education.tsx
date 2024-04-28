'use client';
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { LOCAL_STORAGE_EDUCATIONS } from '~/app/constants/constants';
import { StoreController } from '~/app/controllers/StoreController';
import { EducationItem } from '~/app/types/EducationIntem';

export default function Education({
	id,
	degree,
	location,
	school,
	startDate,
	endDate,
	editable,
}: EducationItem) {
	const storeController = new StoreController(LOCAL_STORAGE_EDUCATIONS, true);

	const [modal, contextHolder] = Modal.useModal();

	const handleOnOk = () => {
		storeController.remove(id);
	};

	const handleOnCancel = () => {};

	const handleOnRemove = async (ev: any) => {
		ev.preventDefault();
		modal.confirm({
			title: 'Confirm',
			icon: <ExclamationCircleOutlined />,
			content: 'Do you really want to remove this item from education section ?',
			okText: 'Remove',
			cancelText: 'Cancel',
			onOk: handleOnOk,
			onCancel: handleOnCancel,
		});
	};
	return (
		<div className='education-item'>
			<div className='item-degree'>{degree}</div>
			<div className='item-school'>
				<div>{school}</div>
				<div> {location} </div>
			</div>
			<div>
				{startDate} - {endDate}
			</div>
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
