import { Post } from '@/lib/types';

function SearchResultsItem({ post, i }: { post: Post; i: number }) {
	return (
		<div>
			<h3>
				<strong>#{i + 1}. </strong>
				{post.title}
			</h3>
			<div dangerouslySetInnerHTML={{ __html: post.content }} />
		</div>
	);
}

export default SearchResultsItem;
