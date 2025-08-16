import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: { main: '#1976d2' },
        secondary: { main: '#ff4081' },
        background: { default: '#f5f5f5' },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </StrictMode>
);
