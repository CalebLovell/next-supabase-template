import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { AuthSession } from '@supabase/supabase-js';
import { authLogout } from 'api/auth';

export default function Account() {
	const [authSession, setAuthSession] = useState<AuthSession | null>(null);

	useEffect(() => {
		setAuthSession(supabase.auth.session());

		supabase.auth.onAuthStateChange((_event: string, session: AuthSession | null) => {
			setAuthSession(session);
		});
	}, []);

	return (
		<div className='account'>
			<div>
				<label htmlFor='email'>Email</label>
				<input id='email' type='text' value={authSession?.user?.email} disabled />
			</div>
			<div>
				<button className='button block' onClick={() => authLogout()}>
					Sign Out
				</button>
			</div>
		</div>
	);
}
