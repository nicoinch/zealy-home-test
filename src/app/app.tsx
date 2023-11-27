// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ThemeProvider } from '@/components/theme-provider';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import Welcome from './welcome';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div>
          <Welcome
            title="zealy-home-test"
            onClick={() => console.log('Clicked!')}
          />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
