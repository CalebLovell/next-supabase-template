import { supabase } from '../lib/supabaseClient';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { User } from '@supabase/gotrue-js';
import { Header } from '@components/Header';
import { UserInfo } from '@components/UserInfo';

// Template for Server Side Auth
export default function ServerPage({ user }: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<>
			<Header />
			<main style={{ maxWidth: `600px`, margin: `96px auto` }}>
				{user ? (
					<>
						<h1>This user data was fetched from the Server Side</h1>
						<UserInfo user={user} />
					</>
				) : (
					<>
						<h1>The user data was not available Server Side</h1>
						<p>no cookie stored or it is expired</p>
					</>
				)}
			</main>
		</>
	);
}

// In theory, I think this is supposed to work without explicitly passing in Props like this...
// But if I didn't explicitly define the GetServerSideProps generic, it didn't infer the type,
// so I'm explicitly defining it above ¯\_(ツ)_/¯
export const getServerSideProps: GetServerSideProps<{ user: User | null }> = async ({ req }) => {
	const { user } = await supabase.auth.api.getUserByCookie(req);
	// If there is a user, return it, otherwise user will be null
	return {
		props: {
			user,
		},
	};
};
