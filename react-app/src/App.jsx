import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PlaceListTable from './components/pages/PlaceListTable';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      refetchOnWindowFocus: false,
      staleTime: 5000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <React.Suspense fallback={() => <span>loading</span>}>
        <PlaceListTable />
      </React.Suspense>
    </QueryClientProvider>
  );
}

export default App;
