'use client';
import { DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { LOCAL_STORAGE_SKILLS } from '~/app/constants/constants';
import { StoreController } from '~/app/controllers/StoreController';
import { SimpleItem } from '~/app/types/SimpleItem';

export default function Skill({ id, label, editable }: SimpleItem) {
	const storeController = new StoreController(LOCAL_STORAGE_SKILLS, true);

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
			content: 'Do you really want to remove this item from skills section ?',
			okText: 'Remove',
			cancelText: 'Cancel',
			onOk: handleOnOk,
			onCancel: handleOnCancel,
		});
	};
	return (
		<div>
			<div className='skills-item'> {label}</div>
			{editable && (
				<div className='action'>
					<Button size='small' icon={<DeleteOutlined />} onClick={handleOnRemove}>
						remove
					</Button>
				</div>
			)}
			{contextHolder}
		</div>
	);
}
