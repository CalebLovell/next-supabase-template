import { supabase } from '@lib/supabaseClient';

export const createAuthWithEmail = async (signupRequest: { email: string }) => {
	const res = await supabase.auth.signUp(signupRequest);
	return res;
	// alert('Check your email for the login link!');
	// alert(error.error_description || error.message);
};

export const createAuthWithGoogle = async () => {
	const res = await supabase.auth.signUp({
		provider: 'google',
	});
	return res;
};

export const authLogin = async ({ email, password }: { email: string; password: string }) => {
	const res = await supabase.auth.signIn({ email, password });
	return res;
};

export const authLogout = async () => {
	const res = await supabase.auth.signOut();
	return res;
};

export const updateAuth = async (email: string) => {
	const res = await supabase.auth.update({
		email,
	});
	return res;
};
