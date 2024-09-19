import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from 'styled-components';
import theme from './assets/themes';

createRoot(document.getElementById('root')).render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>
);
