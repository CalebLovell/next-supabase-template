import { Header } from '@components/Header';
import { UserInfo } from '@components/UserInfo';
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
						<UserInfo user={user} />{' '}
					</>
				) : (
					<p>Not logged in</p>
				)}
			</main>
		</>
	);
}
