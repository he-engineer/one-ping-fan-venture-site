import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Link,
  Stack,
  Typography,
} from '@mui/material';

export default function HomePage() {
  return (
    <main>
      <Container
        maxWidth="md"
        sx={{
          py: { xs: 6, md: 10 },
        }}
      >
        <Stack spacing={3}>
          <Typography
            component="h1"
            variant="h3"
            sx={{ fontWeight: 700, color: 'text.primary' }}
          >
            Featured spotlight
          </Typography>

          <Card
            elevation={4}
            sx={{
              overflow: 'hidden',
              borderRadius: 3,
              background:
                'linear-gradient(180deg, rgba(13, 26, 45, 0.9) 0%, rgba(13, 26, 45, 0.95) 100%)',
              color: '#e5f2ff',
            }}
          >
            <CardMedia
              component="img"
              image="/zenshift-wave.svg"
              alt="Stylized gradient waves illustrating ZenShift automation"
              sx={{ height: { xs: 220, md: 280 }, objectFit: 'cover' }}
            />
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Typography
                component="h2"
                variant="h4"
                sx={{ fontWeight: 700, mb: 2 }}
              >
                ZenShift
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, maxWidth: 720 }}>
                ZenShift streamlines AI deployment with automated workflows,
                observability, and governance baked in. Shift teams from
                experimentation to reliable production launches without losing
                speed or control.
              </Typography>
              <CardActions sx={{ px: 0, display: 'flex', gap: 2 }}>
                <Button
                  component="a"
                  href="https://zenshift.io"
                  target="_blank"
                  rel="noreferrer"
                  variant="contained"
                  color="primary"
                  size="large"
                  aria-label="Explore ZenShift and see how it streamlines AI orchestration"
                  sx={{
                    textTransform: 'none',
                    fontWeight: 700,
                    px: 3,
                    boxShadow:
                      '0px 10px 30px rgba(34, 197, 94, 0.28), 0px 6px 12px rgba(0,0,0,0.15)',
                  }}
                >
                  Explore ZenShift
                </Button>
                <Link
                  href="https://zenshift.io/platform"
                  target="_blank"
                  rel="noreferrer"
                  underline="always"
                  color="inherit"
                  sx={{
                    fontWeight: 600,
                    letterSpacing: 0.2,
                    '&:focus-visible': {
                      outline: '3px solid #a855f7',
                      outlineOffset: '4px',
                      borderRadius: 1,
                    },
                  }}
                  aria-label="Read how the ZenShift platform keeps teams aligned"
                >
                  See platform details
                </Link>
              </CardActions>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </main>
  );
}
