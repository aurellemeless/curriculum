'use client';
import { Button, Form, Input, message } from 'antd';
import { useEffect, useState } from 'react';
import Other from './Other';
import { SimpleItem } from '~/app/types/SimpleItem';
import { StoreController } from '~/app/controllers/StoreController';
import { LOCAL_STORAGE_OTHERS } from '~/app/constants/constants';

export default function OtherForm() {
	const [form] = Form.useForm();
	const [others, setOthers] = useState([] as SimpleItem[]);
	const [refresh, setRefresh] = useState(false);
	const storeController = new StoreController(LOCAL_STORAGE_OTHERS, true);
	const onFinish = (ev: any) => {
		ev.preventDefault();
		storeController.save({ id: Date.now(), ...form.getFieldsValue() } as SimpleItem);
		message.success('Submit success!');
		form.resetFields();
		setRefresh(true);
	};

	const onFinishFailed = () => {
		message.error('Submit failed!');
	};

	useEffect(() => {
		setOthers(storeController.getLocalData());
	}, [refresh]);
	return (
		<div className='form-wrapper'>
			<div>
				<Form
					form={form}
					name='other_form'
					layout='vertical'
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					<Form.Item
						name='label'
						label='Label'
						rules={[{ required: true, message: 'Please input something !' }]}
					>
						<Input />
					</Form.Item>

					<Button htmlType='button' onClick={onFinish}>
						Add
					</Button>
				</Form>
			</div>
			<div>
				{others.map((o) => (
					<Other key={o.id} {...o} editable={true} />
				))}
			</div>
		</div>
	);
}
