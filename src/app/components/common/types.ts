import { ReactNode } from 'react';

export interface SectionItem {
	id?: string;
	title: string;
	children: ReactNode;
}
