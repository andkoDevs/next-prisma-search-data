import type { Metadata } from 'next';
import Image from 'next/image';
import { Params } from '@/lib/types';

async function getPost(params: Params) {
	const res = await fetch(`https://next-prisma-search-data.vercel.app/api/posts/${params?.slug ?? ''}`);

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return res.json();
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
	const res = await fetch(`https://next-prisma-search-data.vercel.app/api/posts/${params?.slug ?? ''}`);

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	const data = await res.json();
	return {
		title: data.title,
		description: data.excerpt,
		icons: 'https://andkodigital.com/wp-content/themes/andko/img/favicons/favicon-16x16.png',
	};
}

export default async function Post({ params }: { params: Params }) {
	const post = await getPost(params);
	return (
		<main className="px-5">
			<section className="container mx-auto py-5">
				<Image
					src={post.featured_image}
					width={1000}
					height={600}
					alt={post.title}
					className="rounded-lg"
					style={{ width: '1000px', height: '600px', objectFit: 'cover', objectPosition: 'top' }}
					priority
				/>
				<h1>{post.title}</h1>
				<div className="post" dangerouslySetInnerHTML={{ __html: post.content }} />
			</section>
		</main>
	);
}
