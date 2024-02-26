import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import styles from './App.module.css';

import Form from './components/Form/Form';
import ListContainer from './components/ListContainer/ListContainer';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={styles.container}>
        <div className={styles.wrapper}>
          <Form />
          <ListContainer />
        </div>
      </main>
    </QueryClientProvider>
  );
}

export default App;
