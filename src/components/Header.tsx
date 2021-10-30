import Link from 'next/link';

export const Header = () => {
	return (
		<nav style={{ maxWidth: `600px`, margin: `96px auto`, display: 'flex', justifyContent: 'space-between' }}>
			<Link href='/'>
				<a href='/' style={{ background: '#f4f0ec', padding: 20 }}>
					Home
				</a>
			</Link>
			<Link href='/client'>
				<a href='/client' style={{ background: '#f4f0ec', padding: 20 }}>
					Client
				</a>
			</Link>
			<Link href='/server'>
				<a href='/server' style={{ background: '#f4f0ec', padding: 20 }}>
					Server
				</a>
			</Link>
			<Link href='/auth'>
				<a href='/auth' style={{ background: '#f4f0ec', padding: 20 }}>
					Auth
				</a>
			</Link>
		</nav>
	);
};
