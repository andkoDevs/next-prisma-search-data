import dynamic from 'next/dynamic';
import { Post, Params } from '@/lib/types';

const SearchResultsItem = dynamic(() => import('./SearchResultsItem'));

export default function SearchResults({ posts, parameters }: { posts: Post[]; parameters: Params }) {
	const searchTerm = parameters?.search || 'No search term provided';
	return (
		<section className="container mx-auto">
			{parameters.search && !!parameters.search.length ? (
				<h1>
					Search results for: <strong>{searchTerm}</strong>
				</h1>
			) : (
				<h1>All Posts</h1>
			)}

			<div className="w-full my-5 flex flex-col gap-5">
				{!!posts.length ? posts.map((post: Post, i: number) => <SearchResultsItem key={post.id} post={post} i={i} />) : <h3>No Posts found with this keyword!</h3>}
			</div>
		</section>
	);
}
