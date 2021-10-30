import { User } from '@supabase/gotrue-js';

export const UserInfo = ({ user }: { user: User }) => {
	return (
		<>
			<p>Id: {user?.id}</p>
			<p>Email: {user?.email}</p>
			<p>Provider: {user?.app_metadata.provider}</p>
			<p>Last Sign in: {user?.last_sign_in_at}</p>
		</>
	);
};
