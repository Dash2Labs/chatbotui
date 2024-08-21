import { ThemeProvider } from "@mui/material";
import themes from "./themes.js";
import ChatBox from "./chatbox.js";
import Minimized from "./minimized.js";
import FullPage from "./fullpage.js";
import BotBubble from "./bot_bubble.js";
import HumanBubble from "./human_bubble.js";
import { ChatUIProps, SingleBubbleProps } from "./props.js";

const ChatUI = (props: ChatUIProps) => {
    const { history, title } = props;
    return (
        <>
        <ThemeProvider theme={themes.main}>
            <ChatBox children={BubbleHistory(history)} headerText={title} />
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