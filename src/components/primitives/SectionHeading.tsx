'use client';

import { Stack, Typography } from '@mui/material';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  variant?: 'h1' | 'h2' | 'h3';
};

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'left',
  variant = 'h2',
}: SectionHeadingProps) => (
  <Stack
    spacing={1}
    alignItems={align === 'center' ? 'center' : 'flex-start'}
    textAlign={align === 'center' ? 'center' : 'left'}
  >
    {eyebrow && (
      <Typography
        variant="overline"
        sx={{ color: 'primary.main', letterSpacing: '0.08em', fontWeight: 700 }}
      >
        {eyebrow}
      </Typography>
    )}
    <Typography variant={variant} component={variant}>
      {title}
    </Typography>
    {description && (
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720 }}>
        {description}
      </Typography>
    )}
  </Stack>
);

export default SectionHeading;
