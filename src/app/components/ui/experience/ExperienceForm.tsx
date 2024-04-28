'use client';
import { Button, Form, Input, message } from 'antd';
import { ExperienceItem } from '~/app/types/ExperienceItem';
import { useEffect, useState } from 'react';
import Experience from './Experience';
import { StoreController } from '~/app/controllers/StoreController';
import { LOCAL_STORAGE_EXPERIENCES } from '~/app/constants/constants';

export default function ExperienceForm() {
	const [form] = Form.useForm();
	const [experiences, setExperiences] = useState([] as ExperienceItem[]);
	const [refresh, setRefresh] = useState(false);
	const storeController = new StoreController(LOCAL_STORAGE_EXPERIENCES, true);
	const onFinish = (ev: any) => {
		ev.preventDefault();
		storeController.save({ id: Date.now(), ...form.getFieldsValue() } as ExperienceItem);
		message.success('Submit success!');
		form.resetFields();
		setRefresh(true);
	};

	const onFinishFailed = () => {
		message.error('Submit failed!');
	};

	useEffect(() => {
		setExperiences(storeController.getLocalData());
	}, [refresh]);
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
						name='position'
						label='Position'
						rules={[{ required: true, message: 'Please input your position !' }]}
					>
						<Input placeholder='position' />
					</Form.Item>
					<Form.Item
						name='company'
						label='Company'
						rules={[{ required: true, message: 'Please input your Company !' }]}
					>
						<Input placeholder='Company name' />
					</Form.Item>
					<Form.Item
						name='startDate'
						label='Start date'
						rules={[{ required: true, message: 'Please input your start date !' }]}
					>
						<Input placeholder='when you started' />
					</Form.Item>
					<Form.Item
						name='endDate'
						label='end date'
						rules={[{ required: true, message: 'Please input your end date !' }]}
					>
						<Input placeholder='when you end' />
					</Form.Item>
					<Form.Item
						name='location'
						label='Location'
						rules={[{ required: true, message: 'Please input your Location !' }]}
					>
						<Input placeholder='when you end' />
					</Form.Item>
					<Form.Item
						name='description'
						label='Description'
						rules={[{ required: true, message: 'Please input your description !' }]}
					>
						<Input.TextArea placeholder='describe your role' />
					</Form.Item>
					<Button htmlType='button' onClick={onFinish}>
						Add
					</Button>
				</Form>
			</div>
			<div>
				{experiences.map((xp) => (
					<Experience key={xp.id} {...xp} editable={true} />
				))}
			</div>
		</div>
	);
}
