import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

const Search = dynamic(() => import('@/components/Search'));
const SearchResults = dynamic(() => import('@/components/SearchResults'));

async function getData(params: { [key: string]: string | string[] | undefined }) {
	const res = await fetch(`http://localhost:3000/api/posts?search=${params?.search ?? ''}`);

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return res.json();
}

export async function generateMetadata(): Promise<Metadata> {
	return {
		icons: 'https://andkodigital.com/wp-content/themes/andko/img/favicons/favicon-16x16.png',
	};
}
export default async function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
	const posts = await getData(searchParams);

	return (
		<main className="px-5">
			<Search parameters={searchParams} />
			<SearchResults posts={posts} parameters={searchParams} />
		</main>
	);
}
