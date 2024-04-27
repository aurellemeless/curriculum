'use client';
import Curriculum from '~/app/components/ui/curriculum';
import { DUMMY_DATA } from '~/app/constants/dummy';
import { App } from './components/ui/app/App';
import { useState } from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';

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
