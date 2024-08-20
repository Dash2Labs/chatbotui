import { Theme } from '@mui/material/styles';

const chooseThemeMode = (main: any, light?: any, dark?: any,  theme?: Theme) => {
    if (theme?.palette.mode === 'light') {
        return light || main;
    }
    else if (theme?.palette.mode === 'dark') {
        return dark || main;
    }
    return main;
};
const chooseThemeModeP = (property: string, theme: Theme) => {
    const light: { [key: string]: string } = {
        'color': theme.palette.text.primary,
        'backgroundColor': theme.palette.background.default,
        'borderColor': theme.palette.primary.light,
    }
    const dark: { [key: string]: string } = {
        'color': theme.palette.text.secondary,
        'backgroundColor': theme.palette.background.paper,
        'borderColor': theme.palette.primary.dark,
    }
    if (theme.palette.mode === 'light') {
        return light[property] || theme.palette.primary.light || theme.palette.secondary.light || theme.palette.primary.main;
    }
    else if (theme.palette.mode === 'dark') {
        return dark[property] || theme.palette.primary.dark || theme.palette.secondary.light || theme.palette.primary.main;
    }
    return theme.palette.primary.main;
};

const chooseThemeModeS = (property: string, theme: Theme) => {
    const light: { [key: string]: string } = {
        'color': theme.palette.text.secondary,
        'backgroundColor': theme.palette.background.default,
        'borderColor': theme.palette.secondary.light,
    }
    const dark: { [key: string]: string } = {
        'color': theme.palette.text.secondary,
        'backgroundColor': theme.palette.background.paper,
        'borderColor': theme.palette.secondary.dark,
    }
    if (theme.palette.mode === 'light') {
        return light[property] || theme.palette.secondary.light || theme.palette.primary.light || theme.palette.primary.main;
    }
    else if (theme.palette.mode === 'dark') {
        return dark[property] || theme.palette.secondary.dark || theme.palette.primary.dark || theme.palette.primary.main;
    }
    return theme.palette.primary.main;
};

export { chooseThemeMode, chooseThemeModeP, chooseThemeModeS };