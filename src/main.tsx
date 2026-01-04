import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import { LanguageProvider } from './contexts/LanguageContext';
import './index.css';
import App from './App.tsx';

// Create Apollo Client instance
const httpLink = new HttpLink({
  uri: 'http://localhost:4000',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ApolloProvider>
  </StrictMode>
);
