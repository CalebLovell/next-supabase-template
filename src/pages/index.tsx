import { Header } from '@components/Header';

export default function IndexPage() {
	return (
		<>
			<Header />
			<main style={{ maxWidth: `600px`, margin: `96px auto` }}>
				<h1>Welcome to my Next.js Supabase Template</h1>
				<h2>This template uses Next.js + React Query to set up both client side and server side authorization</h2>
			</main>
		</>
	);
}
