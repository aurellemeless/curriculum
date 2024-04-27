'use client';
import { Button, Form, Input, message } from 'antd';
import { ContactItem } from '~/app/types/ContactItem';
import { useEffect } from 'react';
import { LOCAL_STORAGE_CONTACTS } from '~/app/constants/constants';
import { StoreController } from '~/app/controllers/Controller';

export default function ContactForm() {
	const [form] = Form.useForm();
	const storeController = new StoreController(LOCAL_STORAGE_CONTACTS);
	const onFinish = (ev: any) => {
		ev.preventDefault();
		storeController.save(form.getFieldsValue() as ContactItem);
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
					name='contact_form'
					layout='vertical'
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					<Form.Item
						name='phone'
						label='Phone'
						rules={[{ required: true, message: 'Please input your phone !' }]}
					>
						<Input placeholder='+1 00 000 000 00' />
					</Form.Item>
					<Form.Item
						name='email'
						label='E-mail'
						rules={[{ required: true, message: 'Please input your e-mail !' }]}
					>
						<Input placeholder='user2data@gmail.com' />
					</Form.Item>
					<Form.Item
						name='address'
						label='Address'
						rules={[{ required: true, message: 'Please input your address !' }]}
					>
						<Input placeholder='Your less precise address' />
					</Form.Item>
					<Form.Item name='linkedin' label='linkedIn'>
						<Input placeholder='http://ipsumdolorsit.amet' />
					</Form.Item>
					<Form.Item name='youtube' label='Youtube'>
						<Input placeholder='http://ipsumdolorsit.amet' />
					</Form.Item>
					<Form.Item name='facebook' label='Facebook'>
						<Input placeholder='http://ipsumdolorsit.amet' />
					</Form.Item>
					<Form.Item name='github' label='Github'>
						<Input placeholder='http://ipsumdolorsit.amet' />
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
