import { supabase } from '@lib/supabaseClient';
import { useMutation } from 'react-query';

import { AuthChangeEvent, Session } from '@supabase/gotrue-js';
import axios from 'axios';

interface AuthProps {
	event: AuthChangeEvent;
	session: Session | null;
}

const setAuthCookie = async ({ event, session }: AuthProps) => {
	const { data } = await axios.post(
		'/api/auth',
		{ event, session },
		{
			headers: {
				'Content-Type': `application/json`,
			},
			withCredentials: true,
		}
	);
	return data;
};

export const useSetAuthCookie = () => {
	return useMutation((data: AuthProps) => setAuthCookie(data), {
		onError: (error: Error) => {
			console.log(error);
		},
		onSuccess: () => {
			console.log('Success!');
		},
	});
};

const authLogout = async () => {
	const res = await supabase.auth.signOut();
	return res;
};

export const useAuthLogout = () => {
	const { mutate: removeCookie } = useSetAuthCookie();
	return useMutation(authLogout, {
		onError: (error: Error) => {
			console.log(error);
		},
		onSuccess: () => {
			supabase.auth.onAuthStateChange((event, session) => {
				removeCookie({ event, session });
			});
		},
	});
};
