import { React, useTheme } from './common_imports.ts';
import { BubbleProps } from './props.ts';
import './styles/bubbles.css';

const BotBubble = (props: BubbleProps) => {
    const { children, text } = props;
    let theme = useTheme();
    const style = {
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.secondary.main,
        padding: '2px',
        margin: '2px',
        left: '0', // Set the left property to '0' to align the element to the far left
    }

    return (<span style={style} className='bot-bubble'>{text}{children}</span>);
};

export default BotBubble;