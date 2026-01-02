'use client';

import { forwardRef } from 'react';
import { Button as MuiButton, ButtonProps } from '@mui/material';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, variant = 'contained', color = 'primary', sx, ...props },
  ref,
) {
  return (
    <MuiButton
      ref={ref}
      variant={variant}
      color={color}
      sx={{
        borderRadius: '999px',
        px: { xs: 3, md: 4 },
        py: 1.25,
        fontWeight: 700,
        boxShadow: variant === 'contained' ? 'var(--shadow-soft)' : 'none',
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
});

export default Button;
