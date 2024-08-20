import { React, useTheme } from './common_imports.ts';
import FormEntry from './formentry.tsx';
import Header from './header.tsx';
import { ChatBoxProps } from './props.ts';
import { dragElement } from './drag_element.ts';
import './styles/chatbox.css';


const ChatBox = (props: ChatBoxProps) => {
    const { headerText } = props;
    const theme = useTheme();
    let { children } = props;
    if (!children) {
        children = [];
    }
    const chatbox = React.createElement('div', {
        style: {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.background.default,
            borderColor: theme.palette.secondary.main,
            borderStyle: 'solid',
            boxShadow: theme.shadows[1],
        },
        className: 'chatbox'
    },<Header text={headerText} expand={true}/>, <div>{children}</div>, <FormEntry />);

    return (<div>
        <div id="drag_chatbox" onClick={(e)=>(dragElement(e.currentTarget))}>
            {chatbox}
        </div>
    </div>)
};

export default ChatBox;