import { supabase } from '../lib/supabaseClient';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { User } from '@supabase/gotrue-js';
import { Header } from '@components/Header';

// Template for Server Side Auth
export default function ServerPage({ user }: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<>
			<Header />
			<main style={{ maxWidth: `600px`, margin: `96px auto` }}>
				<h1>This user data was fetched from the Server Side</h1>
				<p>{user?.id}</p>
				<p>{user?.email}</p>
				<p>{user?.app_metadata.provider}</p>
				<p>{user?.last_sign_in_at}</p>
			</main>
		</>
	);
}

// In theory, I think this is supposed to work without explicitly passing in Props like this...
// But if I didn't explicitly define the GetServerSideProps generic, it didn't infer the type,
// so I'm explicitly defining it above ¯\_(ツ)_/¯
export const getServerSideProps: GetServerSideProps<{ user: User }> = async ({ req }) => {
	const { user } = await supabase.auth.api.getUserByCookie(req);
	// If there is no user, redirect to auth
	if (!user) return { props: {}, redirect: { destination: '/auth', permanent: false } };
	// If there is a user, return it
	return {
		props: {
			user,
		},
	};
};
