'use client';

import { Button, Form, Input, message } from 'antd';
import { ProfileItem } from '~/app/types/ProfileItem';
import { useEffect } from 'react';
import { StoreController } from '~/app/controllers/StoreController';
import { LOCAL_STORAGE_PROFILE } from '~/app/constants/constants';

export default function ProfileForm() {
	const [form] = Form.useForm();
	const storeController = new StoreController(LOCAL_STORAGE_PROFILE);
	const initialValues = { remember: true };
	const onFinish = (ev: any) => {
		ev.preventDefault();
		storeController.save(form.getFieldsValue() as ProfileItem);
		message.success('Submit success!');
	};

	const onFinishFailed = () => {
		message.error('Submit failed!');
	};

	useEffect(() => {
		form.setFieldsValue(storeController.getLocalData());
	}, []);

	return (
		<div className='form-wrapper'>
			<div>
				<Form
					form={form}
					name='profile_form'
					layout='vertical'
					initialValues={initialValues}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					<Form.Item
						name='firstname'
						label='First name'
						rules={[{ required: true, message: 'Please input your firstname !' }]}
					>
						<Input placeholder='firstname' />
					</Form.Item>

					<Form.Item
						name='lastname'
						label='Last name'
						rules={[{ required: true, message: 'Please input your lastname !' }]}
					>
						<Input placeholder='lastname' />
					</Form.Item>

					<Form.Item
						name='position'
						label='Position'
						rules={[{ required: true, message: 'Please input the position are you looking for!' }]}
					>
						<Input placeholder='Which position are you looking for ?' />
					</Form.Item>
					<Form.Item
						name='description'
						label='Desciption'
						rules={[{ required: true, message: 'Please describe yourself here!' }]}
					>
						<Input.TextArea placeholder='Describe yourself here' />
					</Form.Item>
				</Form>
			</div>
			<div>
				<Button htmlType='button' onClick={onFinish}>
					Save
				</Button>
			</div>
		</div>
	);
}
