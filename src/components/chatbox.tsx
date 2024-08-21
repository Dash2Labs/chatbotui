import { React, useTheme, chooseThemeMode } from './common_imports.js';
import FormEntry from './formentry.js';
import Header from './header.js';
import { ChatBoxProps } from './props.js';
import { dragElement } from './drag_element.js';
import { Box } from '@mui/material';
import './styles/chatbox.css';


const ChatBox = (props: ChatBoxProps) => {
    const { headerText } = props;
    const theme = useTheme();
    let { children } = props;
    if (!children) {
        children = [];
    }
    const style = {
        color: chooseThemeMode(theme.palette.text.primary, null, theme.palette.text.secondary, theme),
        backgroundColor: chooseThemeMode(theme.palette.background.default, null, theme.palette.background.paper, theme),
        borderColor: chooseThemeMode(theme.palette.secondary.main, theme.palette.secondary.light, theme.palette.secondary.dark, theme),
        borderStyle: 'solid'
    }
    const chatbox = <Box sx={style} className='chatbox' boxShadow={1}>
        <Header text={headerText} expand={true}/>
        <div>{children}</div>
        <FormEntry />
    </Box>;

    return (<div>
        <div id="drag_chatbox" onClick={(e)=>(dragElement(e.currentTarget))}>
            {chatbox}
        </div>
    </div>)
};

export default ChatBox;