import React from 'react';
import themes from './components/themes.js';
import HumanBubble from './components/human_bubble.js';
import BotBubble from './components/bot_bubble.js';
import ChatBox from './components/chatbox.js';
import Minimized from './components/minimized.js';
import FullPage from './components/fullpage.js';
import { ThemeProvider } from '@mui/material';

const chatHistory = [<BotBubble text="Hello, how can I help you today?" />,
<HumanBubble text="I need help with my account." />,
<BotBubble text="Sure, what do you need help with?" />,
<HumanBubble text="I need to reset my password." />]

const App = () => {
    return (
        <>
        <ThemeProvider theme={themes.main}>
            <ChatBox children={chatHistory} headerText='Sunport AI' />
            <Minimized src="./assets/ChatBubbleIcon.svg"/>
            <FullPage></FullPage>
        </ThemeProvider>
        </>
    );
}

export default App;