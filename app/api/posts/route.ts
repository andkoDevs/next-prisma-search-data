import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
	const search = request.nextUrl.searchParams.get('search');
	const contains = search ? search : '';
	const posts = await prisma.post.findMany({
		where: {
			OR: [
				{
					title: {
						contains,
					},
				},
				{
					content: {
						contains,
					},
				},
				{
					excerpt: {
						contains,
					},
				},
			],
		},
	});
	return NextResponse.json(posts);
}
