import React from "react";

export type ChatBoxProps = {
    headerText: string,
    children?: React.ReactNode[],
};

export type HeaderProps = {
    children?: React.ReactNode[],
    text?: string,
    expand?: boolean,
};

export type BubbleProps = {
    children?: React.ReactNode[],
    text: string,
};

export type MinimizedProps = {
    style?: React.CSSProperties,
    src: string
};

export type SingleBubbleProps = {
    text: string,
    type: string
};

export type ChatUIProps = {
    history: SingleBubbleProps[],
    title: string
};
