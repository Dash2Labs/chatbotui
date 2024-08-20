import { ThemeProvider } from "@mui/material";
import themes from "./themes.ts";
import ChatBox from "./chatbox.tsx";
import Minimized from "./minimized.tsx";
import FullPage from "./fullpage.tsx";
import BotBubble from "./bot_bubble.tsx";
import HumanBubble from "./human_bubble.tsx";
import { SingleBubbleProps } from "./props.ts";

const ChatUI = (props: { history: SingleBubbleProps[] }) => {
    const { history } = props;
    return (
        <>
        <ThemeProvider theme={themes.main}>
            <ChatBox children={BubbleHistory(history)} headerText='Sunport AI' />
            <Minimized src="./assets/ChatBubbleIcon.svg"/>
            <FullPage></FullPage>
        </ThemeProvider>
        </>
    );
}

function BubbleHistory (history: SingleBubbleProps[]) {
    return history.map((bubble: SingleBubbleProps) => {
        if (bubble.type === 'b') {
            return <BotBubble text={bubble.text} />;
        } else if (bubble.type === 'h') {
            return <HumanBubble text={bubble.text} />;
        }
    });
}

export default ChatUI;