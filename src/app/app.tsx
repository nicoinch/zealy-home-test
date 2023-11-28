// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ThemeProvider } from '@/components/theme-provider';
import { CommentAnywhere } from '@/components/CommentAnywhere';

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-screen h-screen">
        <CommentAnywhere
          comments={[
            {
              author: 'John Doe',
              authorAvatar:
                'https://secure.gravatar.com/avatar/72fa1cd77b1ed5366756a0e8c4d1c3f3b8706c7461b82639fb201fd5afabe598',
              content: 'This is a comment',
              createdAt: '2 days ago',
            },
            {
              author: 'John Doe',
              authorAvatar:
                'https://secure.gravatar.com/avatar/72fa1cd77b1ed5366756a0e8c4d1c3f3b8706c7461b82639fb201fd5afabe598',
              content: 'This is another comment',
              createdAt: 'Just now',
            },
          ]}
          userName="Jane Doe"
          userAvatar="https://secure.gravatar.com/avatar/72fa1cd77b1ed5366756a0e8c4d1c3f3b8706c7461b82639fb201fd5afabe598"
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
