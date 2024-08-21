import { React, useTheme, chooseThemeModeS } from './common_imports.js';
import { BubbleProps } from './props.js';
import './styles/bubbles.css';

const HumanBubble = (props: BubbleProps) => {
    const { children, text } = props;
    const theme = useTheme();
    return React.createElement('span', {
        style: {
            backgroundColor: chooseThemeModeS('backgroundColor', theme),
            borderColor: chooseThemeModeS('borderColor', theme),
            padding: '2px',
            margin: '2px',
            right: '0', // Set the right property to '0' to align the element to the far right
        },
        className: 'human-bubble',
    }, text, children);
};

export default HumanBubble;