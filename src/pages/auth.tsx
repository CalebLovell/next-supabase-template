import { Auth } from '@supabase/ui';
import { supabase } from '../lib/supabaseClient';
import { useEffect, useState } from 'react';
import { Header } from '@components/Header';
import { useAuthLogout, useSetAuthCookie } from '@hooks/auth';

export default function AuthPage() {
	const [authView, setAuthView] = useState(`sign_up`);
	const { user, error } = Auth.useUser();
	const { mutate: setAuthCookie } = useSetAuthCookie();
	const { mutate: authLogout } = useAuthLogout();

	useEffect(() => {
		const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
			if (event === `PASSWORD_RECOVERY`) setAuthView(`update_password`);
			if (event === `USER_UPDATED`) setTimeout(() => setAuthView(`sign_in`), 1000);
			// Send session to /api/auth route to set the auth cookie.
			// NOTE: this is only needed if you're doing SSR (getServerSideProps)!
			setAuthCookie({ event, session });
		});

		return () => {
			authListener?.unsubscribe();
		};
	}, []);

	return (
		<>
			<Header />
			<main style={{ maxWidth: `420px`, margin: `96px auto` }}>
				{error ? (
					<p>Failed to fetch user!</p>
				) : user ? (
					<>
						<p>You area already logged in!</p>
						<div style={{ display: 'flex', flexDirection: 'column' }}>
							<button onClick={() => authLogout()}>Logout</button>
						</div>
					</>
				) : (
					<Auth
						supabaseClient={supabase}
						providers={['google', 'facebook']}
						authView={authView}
						socialLayout='horizontal'
						socialButtonSize='xlarge'
					/>
				)}
			</main>
		</>
	);
}
