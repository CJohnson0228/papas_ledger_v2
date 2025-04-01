import { DevTools } from 'jotai-devtools';
import 'jotai-devtools/styles.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router";
import App from './App';
import './styles/index.css';
import { ThemeProvider } from './styles/ThemeProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme='system' storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    </BrowserRouter>
    <DevTools />
  </StrictMode>,
)
