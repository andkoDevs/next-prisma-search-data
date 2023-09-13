'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { GoSearch } from 'react-icons/go';

export default function Search({ parameters }: { parameters: { [key: string]: string | string[] | undefined } }) {
	const router = useRouter();
	const [value, setValue] = useState(parameters && !!parameters?.search?.length ? parameters?.search : '');

	const submitionHendler = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		router.push(`/?search=${value}`);
	};

	return (
		<form onSubmit={submitionHendler} className="container mx-auto my-5 relative flex flex-wrap items-center border-gray-300 border-2 rounded-lg">
			<input
				type="search"
				defaultValue={value}
				placeholder="Search any title or description of the posts..."
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
				className="border-0 focus:border-0 outline-none rounded-lg w-full px-4 py-3 text-xl"
			/>
			<button type="submit" title="Search" className="absolute right-0 text-[26px] text-gray-400 px-2">
				<GoSearch className="" />
			</button>
		</form>
	);
}
