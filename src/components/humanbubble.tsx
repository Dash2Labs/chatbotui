import { React, useTheme } from './common_imports.ts';
import { BubbleProps } from './props.ts';
import './styles/bubbles.css';

const HumanBubble = (props: BubbleProps) => {
    const { children, text } = props;
    const theme = useTheme();
    return React.createElement('span', {
        style: {
            backgroundColor: theme.palette.secondary.main,
            borderColor: theme.palette.secondary.main,
            padding: '2px',
            margin: '2px',
            right: '0', // Set the right property to '0' to align the element to the far right
        },
        className: 'human-bubble',
    }, text, children);
};

export default HumanBubble;