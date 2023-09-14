export interface Post {
	id: string;
	title: string;
	slug: string;
	content: string;
	excerpt?: string;
	featured_image?: string;
}

export interface Params {
	[key: string]: string | string[] | undefined;
}