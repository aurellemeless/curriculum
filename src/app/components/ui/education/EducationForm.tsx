'use client';
import { Button, Form, Input, message } from 'antd';
import { EducationItem } from '~/app/types/EducationIntem';
import { useEffect, useState } from 'react';
import Education from './Education';
import { StoreController } from '~/app/controllers/StoreController';
import { LOCAL_STORAGE_EDUCATIONS } from '~/app/constants/constants';

export default function EducationForm() {
	const [form] = Form.useForm();
	const [educations, setEducations] = useState([] as EducationItem[]);
	const storeController = new StoreController(LOCAL_STORAGE_EDUCATIONS, true);
	const onFinish = (ev: any) => {
		ev.preventDefault();
		storeController.save({ id: Date.now(), ...form.getFieldsValue() } as EducationItem);
		message.success('Submit success!');
	};

	const onFinishFailed = () => {
		message.error('Submit failed!');
	};

	useEffect(() => {
		setEducations(storeController.getLocalData());
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
						name='degree'
						label='Degree / Diploma'
						rules={[{ required: true, message: 'Please input your degree !' }]}
					>
						<Input placeholder='master / bachelor etc.' />
					</Form.Item>
					<Form.Item
						name='school'
						label='School'
						rules={[{ required: true, message: 'Please input your school !' }]}
					>
						<Input placeholder='university of your city' />
					</Form.Item>
					<Form.Item
						name='startDate'
						label='Start date '
						rules={[{ required: true, message: 'Please input your start date !' }]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						name='endDate'
						label='end date '
						rules={[{ required: true, message: 'Please input your end date !' }]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						name='location'
						label='Location'
						rules={[{ required: true, message: 'Please input your Location !' }]}
					>
						<Input />
					</Form.Item>
					<Button htmlType='button' onClick={onFinish}>
						Add
					</Button>
				</Form>
			</div>
			<div>
				{educations.map((edu) => (
					<Education key={edu.id} {...edu} editable={true} />
				))}
			</div>
		</div>
	);
}
