'use client';

import { Paper, PaperProps, Stack, Typography } from '@mui/material';
import { ReactNode } from 'react';

type CardProps = PaperProps & {
  title?: string;
  subtitle?: string;
  actions?: ReactNode;
};

const Card = ({ title, subtitle, actions, children, sx, ...props }: CardProps) => (
  <Paper
    elevation={0}
    sx={{
      p: { xs: 3, md: 4 },
      background: 'linear-gradient(145deg, #ffffff 0%, #f8fbff 100%)',
      border: '1px solid',
      borderColor: 'divider',
      boxShadow: 'var(--shadow-soft)',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      ...sx,
    }}
    {...props}
  >
    {(title || subtitle) && (
      <Stack spacing={0.5}>
        {title && (
          <Typography variant="h6" component="h3">
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography variant="body1" color="text.secondary">
            {subtitle}
          </Typography>
        )}
      </Stack>
    )}
    {children}
    {actions && (
      <Stack direction="row" spacing={1} alignItems="center">
        {actions}
      </Stack>
    )}
  </Paper>
);

export default Card;
