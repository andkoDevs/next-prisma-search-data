import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const Header = dynamic(() => import('@/components/Header'));

export const metadata: Metadata = {
	title: 'Search Data App',
	description: 'This is the fastest way to search big data!!!',
};

import '@/styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}
