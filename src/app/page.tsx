'use client';
import Curriculum from '~/app/components/ui/curriculum';
import { DUMMY_DATA } from '~/app/constants/dummy';
import { App } from './components/ui/app/App';
import { useEffect, useState } from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { LOCAL_STORAGE } from './constants/constants';

export default function Home() {
	const [isAppOpen, setIsAppOpen] = useState(false);
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
		localStorage.setItem(LOCAL_STORAGE, JSON.stringify(DUMMY_DATA));
	};
	useEffect(() => {
		loadDummyOnLocal();
	}, []);

	return (
		<main>
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
					<Curriculum {...DUMMY_DATA} />
				</div>
				{isAppOpen && (
					<div className='app'>
						<App />
					</div>
				)}
			</div>
		</main>
	);
}
