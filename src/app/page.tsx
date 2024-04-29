'use client';
import Curriculum from '~/app/components/ui/curriculum';
import { useEffect, useState } from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Button, Spin } from 'antd';
import { LOCAL_STORAGE } from './constants/constants';
import { App } from './components/ui/app/App';
import axios from 'axios';
import { CVData } from './components/ui/curriculum/types';

export default function Home() {
	const [isAppOpen, setIsAppOpen] = useState(false);
	const [loading, setLoading] = useState(true);
	const [CvData, setCvData] = useState({} as CVData);
	const handleCurriculumClick = (ev: any) => {
		ev.preventDefault();
		if (isAppOpen) {
			setIsAppOpen(false);
		}
	};
	const handleEditClick = (ev: any) => {
		ev.preventDefault();
		setIsAppOpen(true);
	};
	/**
	 *
	 * for dev purposes : should be removed later
	 */
	const loadDummyOnLocal = () => {
		setLoading(true);
		axios.get('/data/cv.json').then(function ({ data }) {
			console.log(data);
			localStorage.setItem(LOCAL_STORAGE, JSON.stringify(data));
			setCvData(data);
			setLoading(false);
		});
	};
	useEffect(() => {
		loadDummyOnLocal();
	}, []);

	return (
		<main>
			{loading && (
				<Spin tip='Loading' size='large'>
					<div className='content' />
				</Spin>
			)}
			{!loading && (
				<div className='page-wrapper'>
					<div className='curriculum' onClick={handleCurriculumClick}>
						{!isAppOpen && (
							<div style={{ display: 'flex', justifyContent: 'center', margin: 10 }}>
								<Button htmlType='button' onClick={handleEditClick}>
									Edit resume
									<EditOutlined />
								</Button>
							</div>
						)}
						<Curriculum {...CvData} />
					</div>
					{isAppOpen && (
						<div className='app'>
							<App />
						</div>
					)}
				</div>
			)}
		</main>
	);
}
