// NOTE: this file is only needed if you're doing SSR!

import { supabase } from '../../lib/supabaseClient';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'POST') {
		supabase.auth.api.setAuthCookie(req, res);
	} else {
		res.status(405).setHeader('Allow', 'POST');
	}
}
