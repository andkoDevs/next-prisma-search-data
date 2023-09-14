import { Post } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

function SearchResultsItem({ post, i }: { post: Post; i: number }) {
	return (
		<Link
			title={post.title}
			href={`/posts/${post.slug}`}
			className="px-5 py-4 border-gray-300 border-2 rounded-lg flex flex-col lg:flex-row items-center gap-5 transition-all shadow hover:shadow-xl"
		>
			{post.featured_image && !!post.featured_image.length && (
				<div className="rounded-lg w-full lg:w-[500px]">
					<Image
						src={post.featured_image}
						width={1000}
						height={400}
						alt={post.title}
						className="rounded-lg"
						style={{ width: '1000px', height: '400px', objectFit: 'cover', objectPosition: 'top' }}
						priority
					/>
				</div>
			)}
			<div className="flex flex-col gap-1 w-full lg:w-[calc(100%-500px)]">
				<h3>{post.title}</h3>
				<p>{post.excerpt}</p>
			</div>
		</Link>
	);
}

export default SearchResultsItem;
