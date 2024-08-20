import { createTheme } from '@mui/material/styles';

// convert hex to rgba
const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const primaryColor = '#1976d2';
const secondaryColor = '#dc004e';
const main = createTheme({
    palette: {
        primary: {
            light: '#63a4ff',
            main: primaryColor,
            dark: '#004ba0',
        },
        secondary: {
            light: '#ff5983',
            main: secondaryColor,
            dark: '#9a0036',
        },
        error: {
            light: '#e57373',
            main: '#f44336',
            dark: '#d32f2f',
        },
        background: {
            default: '#fff',
            paper: '#fff',
        },
        text: {
            primary: '#000',
            secondary: '#fff',
        }
    },
    shadows: ['none', `0 0 25px 0 ${hexToRgba(secondaryColor, .12)}`, `0 0 25px 0 ${hexToRgba(secondaryColor, .12)}`, `0 0 25px 0 ${hexToRgba(secondaryColor, .12)}`, 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
});

const themes = { main };
export default themes;

/*
export interface ThemeOptions extends Omit<SystemThemeOptions, 'zIndex'> {
  mixins?: MixinsOptions;
  components?: Components<Omit<Theme, 'components'>>;
  palette?: PaletteOptions;
  shadows?: Shadows;
  transitions?: TransitionsOptions;
  typography?: TypographyOptions | ((palette: Palette) => TypographyOptions);
  zIndex?: ZIndexOptions;
  unstable_strictMode?: boolean;
  unstable_sxConfig?: SxConfig;
}

export interface PaletteOptions {
  primary?: PaletteColorOptions;
  secondary?: PaletteColorOptions;
  error?: PaletteColorOptions;
  warning?: PaletteColorOptions;
  info?: PaletteColorOptions;
  success?: PaletteColorOptions;
  mode?: PaletteMode;
  tonalOffset?: PaletteTonalOffset;
  contrastThreshold?: number;
  common?: Partial<CommonColors>;
  grey?: ColorPartial;
  text?: Partial<TypeText>;
  divider?: string;
  action?: Partial<TypeAction>;
  background?: Partial<TypeBackground>;
  getContrastText?: (background: string) => string;
}

export interface Easing {
  easeInOut: string;
  easeOut: string;
  easeIn: string;
  sharp: string;
}
export const easing: Easing;

export interface Duration {
  shortest: number;
  shorter: number;
  short: number;
  standard: number;
  complex: number;
  enteringScreen: number;
  leavingScreen: number;
}
export const duration: Duration;

export interface TransitionsOptions {
  easing?: Partial<Easing>;
  duration?: Partial<Duration>;
  create?: (
    props: string | string[],
    options?: Partial<{ duration: number | string; easing: string; delay: number | string }>,
  ) => string;
  getAutoHeightDuration?: (height: number) => number;
}
*/