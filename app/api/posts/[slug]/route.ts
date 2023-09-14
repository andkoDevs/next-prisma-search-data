import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
	const pathArray = request.nextUrl.pathname.split('/');
	const slug = pathArray[pathArray.length - 1];
	const post = await prisma.post.findUnique({
		where: {
			slug,
		},
	});
	return NextResponse.json(post);
}
