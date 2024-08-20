import { IconButton, SvgIcon } from '@mui/material';
import { React, useTheme, chooseThemeModeS } from './common_imports.ts';
import { HeaderProps } from './props.ts';
import ExpandIcon from './assets/ExpandIcon.svg';
import './styles/chatbox-header.css';


const Header = (props: HeaderProps) => {
    const { children, text, expand } = props;
    const theme = useTheme();
    const properties = {
        style: {
            color: chooseThemeModeS('color', theme),
            backgroundColor: chooseThemeModeS('backGroundColor', theme),
            borderColor: chooseThemeModeS('borderColor', theme),
            padding: '0px',
            margin: '0px',
            borderBottomStyle: 'solid',
            textAlign: 'center'
        },
        className: 'chatbox-header'
    }
    const icon = () => (<SvgIcon component={ExpandIcon} style={{fill: theme.palette.secondary.main}}></SvgIcon>);
    return React.createElement('header', properties, 
                                      expand ? (
                                      <IconButton aria-label='expand' id='expand-icon' onClick={gotoFullScreen}>{icon()}
                                      </IconButton>) : null,
                                      <>{text}</>, 
                                      children);
};

const gotoFullScreen = () => {
    const dragChatbox = document.getElementById('drag_chatbox');
    const fullPageChatBox = document.getElementById('fullpage_chatbox');
    if (dragChatbox && fullPageChatBox) {
        dragChatbox.style.display = 'none';
        fullPageChatBox.style.display = 'block';
    }
}
export default Header;