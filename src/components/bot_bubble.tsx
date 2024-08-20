import { React, useTheme, chooseThemeModeP } from './common_imports.js';
import { BubbleProps } from './props.js';
import './styles/bubbles.css';

const BotBubble = (props: BubbleProps) => {
    const { children, text } = props;
    const theme = useTheme();
    const style = {
        backgroundColor: chooseThemeModeP('backgroundColor', theme),
        borderColor: chooseThemeModeP('borderColor', theme),
        padding: '2px',
        margin: '2px',
        left: '0', // Set the left property to '0' to align the element to the far left
    }

    return (<span style={style} className='bot-bubble'>{text}{children}</span>);
};

export default BotBubble;