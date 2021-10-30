import { Header } from '@components/Header';
import { Auth } from '@supabase/ui';

// Template for Client Side Auth
export default function ClientPage() {
	const { user, error } = Auth.useUser();

	return (
		<>
			<Header />
			<main style={{ maxWidth: `600px`, margin: `96px auto` }}>
				{error ? (
					<p>Failed to fetch user!</p>
				) : user ? (
					<>
						<h1>This user data was fetched from the Client Side</h1>
						<p>Id: {user?.id}</p>
						<p>Email: {user?.email}</p>
						<p>Provider: {user?.app_metadata.provider}</p>
						<p>Last Sign in: {user?.last_sign_in_at}</p>
					</>
				) : (
					<p>Not logged in</p>
				)}
			</main>
		</>
	);
}
