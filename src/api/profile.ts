import axios from 'axios';
import { useQuery } from 'react-query';

import { queryKeyStore } from '../lib/queryKeyStore';

const getProfile = async (token: string | null | undefined) => {
	const { data } = await axios.get(`/api/profile`, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		withCredentials: true,
	});
	return data;

	// const user = supabase.auth.user();
	// const { data, error } = await supabase.from('profiles').select(`username, website, avatar_url`).eq('id', user!.id).single();
};

// const updateProfile = () => {
// 	const user = supabase.auth.user();

// 	const updates = {
// 		id: user!.id,
// 		username,
// 		updated_at: new Date(),
// 	};

// 	let { error } = await supabase.from('profiles').upsert(updates, {
// 		returning: 'minimal', // Don't return the value after inserting
// 	});
// };

export const useProfile = (token: string | null | undefined) => {
	return useQuery(queryKeyStore.PROFILE_KEY, () => getProfile(token));
};
