import { React } from './common_imports.ts';
import { MinimizedProps } from './props.ts';
import ChatBubbleIcon from "./assets/ChatBubbleIcon.svg";

const Minimized = (props: MinimizedProps) => {
    const default_style = {
        position: 'fixed',
        bottom: '0px',
        right: '0px',
        transform: 'scale(0.3)',
        cursor: 'pointer',
    }
    return <ChatBubbleIcon onClick={expandChatBox} style={props.style || default_style} id="minimized_chatbox"></ChatBubbleIcon>
}

const expandChatBox = () => {
        const chatbox = document.getElementById('drag_chatbox');
        const minimized_chatbox = document.getElementById('minimized_chatbox');
        if (chatbox && minimized_chatbox) {
            chatbox.style.display = 'block';
            minimized_chatbox.style.display = 'none';
        }
}

export default Minimized;