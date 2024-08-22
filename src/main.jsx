import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Box } from './components/Box'
import {Welcome} from "./components/Welcome/index.jsx";
import { mainStyle } from "./style/HomeStyle.js";

const GlobalStyle = mainStyle;

createRoot(document.getElementById('root')).render(
        <StrictMode>
            <GlobalStyle />
            <Welcome />
            <Box />
        </StrictMode>,
)