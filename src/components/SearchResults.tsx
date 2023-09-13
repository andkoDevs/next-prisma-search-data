import { Post } from '@/lib/types';
import SearchResultsItem from './SearchResultsItem';

export default function SearchResults({ posts, parameters }: { posts: Post[]; parameters: { [key: string]: string | string[] | undefined } }) {
	const searchTerm = parameters?.search || 'No search term provided';
	return (
		<section className="container mx-auto">
			{parameters.search && !!parameters.search.length ? (
				<h1>
					You searched for: <strong>{searchTerm}</strong>
				</h1>
			) : (
				<h1>All Posts</h1>
			)}

			<div className="w-full my-5 flex flex-col gap-5">
				{!!posts.length ? posts.map((post: Post, i: number) => <SearchResultsItem key={post.id} post={post} i={i} />) : 'No data found'}
			</div>
		</section>
	);
}
