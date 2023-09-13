import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
	const search = request.nextUrl.searchParams.get('search');
	const posts = await prisma.post.findMany({
		where: {
			title: {
				contains: search ? search : '',
			},
			content: {
				contains: search ? search : '',
			},
		},
	});
	return NextResponse.json(posts);
}
