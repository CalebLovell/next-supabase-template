import { supabase } from '../../lib/supabaseClient';
import type { NextApiRequest, NextApiResponse } from 'next';

// Example of how to verify and get user data server-side.
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'GET') {
		const authHeader = String(req.headers['Authorization'] || '');
		if (authHeader.startsWith('Bearer ')) {
			const jwt = authHeader.substring(7, authHeader.length);
			const { data: authUser, error } = await supabase.auth.api.getUser(jwt);

			if (error) res.status(401).json({ error: error.message });
			else res.status(200).json(authUser);
		}
	} else {
		res.status(405).setHeader('Allow', 'GET');
	}
}
