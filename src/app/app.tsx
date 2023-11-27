// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ThemeProvider } from '@/components/theme-provider';

import Welcome from './welcome';

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <Welcome
          title="zealy-home-test"
          onClick={() => console.log('Clicked!')}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
