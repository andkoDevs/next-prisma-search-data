import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
	return (
		<header>
			<Link href="/" title="Andko Digital" className="mb-0">
				<Image src="/logo.svg" width={182} height={52} alt="Andko Digital" />
			</Link>
		</header>
	);
}
