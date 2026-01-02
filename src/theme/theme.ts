import { createTheme } from '@mui/material/styles';

export const designTokens = {
  colors: {
    primary: '#2F80ED',
    primaryDark: '#1E5FCC',
    accent: '#5AE0B4',
    background: '#f5f7fb',
    surface: '#ffffff',
    surfaceAlt: '#f8fbff',
    text: '#0b1221',
    mutedText: '#475569',
    divider: '#e2e8f0',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 32,
  },
  radii: {
    sm: 10,
    md: 14,
    lg: 20,
    pill: 999,
  },
  shadows: {
    subtle: '0 2px 8px rgba(15, 23, 42, 0.08)',
    soft: '0 8px 32px rgba(15, 23, 42, 0.08)',
    strong: '0 22px 60px rgba(15, 23, 42, 0.14)',
  },
};

const buildShadows = () => {
  const values = [
    'none',
    designTokens.shadows.subtle,
    designTokens.shadows.soft,
    designTokens.shadows.strong,
  ];

  return [...values, ...Array(25 - values.length).fill(designTokens.shadows.soft)];
};

const theme = createTheme({
  spacing: designTokens.spacing.xs,
  palette: {
    mode: 'light',
    primary: {
      main: designTokens.colors.primary,
      dark: designTokens.colors.primaryDark,
      contrastText: '#ffffff',
    },
    secondary: {
      main: designTokens.colors.accent,
      contrastText: designTokens.colors.text,
    },
    background: {
      default: designTokens.colors.background,
      paper: designTokens.colors.surface,
    },
    text: {
      primary: designTokens.colors.text,
      secondary: designTokens.colors.mutedText,
    },
    divider: designTokens.colors.divider,
  },
  typography: {
    fontFamily:
      'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    subtitle1: {
      fontSize: '1.1rem',
      fontWeight: 600,
      color: designTokens.colors.mutedText,
    },
    body1: {
      fontSize: '1rem',
      color: designTokens.colors.mutedText,
    },
    button: {
      fontWeight: 700,
      letterSpacing: 0,
    },
  },
  shape: {
    borderRadius: designTokens.radii.md,
  },
  shadows: buildShadows(),
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: designTokens.radii.pill,
          paddingInline: designTokens.spacing.xl,
          paddingBlock: designTokens.spacing.sm,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: designTokens.radii.lg,
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: designTokens.colors.background,
        },
      },
    },
  },
});

export default theme;
