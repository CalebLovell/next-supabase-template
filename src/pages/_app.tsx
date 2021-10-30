import { Auth } from '@supabase/ui';
import { supabase } from '../lib/supabaseClient';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }) {
	return (
		<Auth.UserContextProvider supabaseClient={supabase}>
			<QueryClientProvider client={queryClient}>
				<Component {...pageProps} />
				<ReactQueryDevtools initialIsOpen={true} />
			</QueryClientProvider>
		</Auth.UserContextProvider>
	);
}
