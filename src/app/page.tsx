import {
  Box,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { Button, Card, SectionHeading } from '@/components/primitives';

const featureCards = [
  {
    title: 'Research-Driven Decisions',
    description:
      'Data-backed diligence, market maps, and customer signal tracking keep us focused on the right opportunities.',
  },
  {
    title: 'Product Craft & Velocity',
    description:
      'Design sprints, technical reviews, and build partners accelerate experiments into polished releases.',
  },
  {
    title: 'Founder-First Support',
    description:
      'Warm intros, fundraising prep, and leadership coaching built around what each founder needs next.',
  },
];

const programPillars = [
  { label: 'Strategy', value: 'Thesis-led venture bets with clear milestones.' },
  { label: 'Distribution', value: 'Community, partnerships, and GTM playbooks that compound.' },
  { label: 'Capital', value: 'Flexible checks from studio to seed and beyond.' },
];

export default function HomePage() {
  return (
    <main>
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container sx={{ px: { xs: 2.5, md: 4 } }}>
          <Stack spacing={{ xs: 6, md: 8 }}>
            <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
              <Grid item xs={12} md={6}>
                <Stack spacing={3}>
                  <Chip
                    label="Venture Studio & Capital"
                    color="secondary"
                    sx={{
                      alignSelf: 'flex-start',
                      fontWeight: 700,
                      px: 1,
                      py: 0.5,
                    }}
                  />
                  <SectionHeading
                    eyebrow="One Ping Fan"
                    title="We partner with bold founders to launch resilient companies."
                    description="A design-forward studio and fund that blends product, capital, and community to help you build momentum from day one."
                    variant="h1"
                  />
                  <Stack direction="row" spacing={2} flexWrap="wrap">
                    <Button size="large">Start a venture</Button>
                    <Button variant="outlined" color="secondary" size="large">
                      View portfolio
                    </Button>
                  </Stack>
                  <Stack direction="row" spacing={3} divider={<Divider flexItem orientation="vertical" />}>
                    <Stack spacing={0.5}>
                      <Typography variant="h3" component="p">
                        45+
                      </Typography>
                      <Typography variant="subtitle1">Products launched</Typography>
                    </Stack>
                    <Stack spacing={0.5}>
                      <Typography variant="h3" component="p">
                        $120M
                      </Typography>
                      <Typography variant="subtitle1">Capital unlocked</Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card
                  title="A guided path from zero to traction"
                  subtitle="Every engagement is built to reduce risk and maximize learning velocity."
                  sx={{
                    height: '100%',
                    boxShadow: 'var(--shadow-strong)',
                  }}
                >
                  <Stack spacing={3}>
                    {programPillars.map((pillar) => (
                      <Stack
                        key={pillar.label}
                        direction="row"
                        spacing={2}
                        alignItems="flex-start"
                        sx={{
                          p: 2,
                          borderRadius: 2,
                          backgroundColor: 'rgba(46, 125, 255, 0.06)',
                        }}
                      >
                        <Box
                          sx={{
                            width: 10,
                            height: 10,
                            borderRadius: '50%',
                            backgroundColor: 'primary.main',
                            mt: 0.75,
                            flexShrink: 0,
                          }}
                        />
                        <Stack spacing={0.5}>
                          <Typography variant="subtitle1">{pillar.label}</Typography>
                          <Typography variant="body1" color="text.secondary">
                            {pillar.value}
                          </Typography>
                        </Stack>
                      </Stack>
                    ))}
                  </Stack>
                </Card>
              </Grid>
            </Grid>

            <Stack spacing={3}>
              <SectionHeading
                eyebrow="What we do"
                title="Full-stack support for every stage of your venture."
                description="From thesis validation to scaling your first million, we provide the systems, specialists, and capital to keep you moving."
              />
              <Grid container spacing={{ xs: 3, md: 4 }}>
                {featureCards.map((feature) => (
                  <Grid item xs={12} md={4} key={feature.title}>
                    <Card title={feature.title} subtitle={feature.description} />
                  </Grid>
                ))}
              </Grid>
            </Stack>

            <Box
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: '20px',
                border: '1px solid',
                borderColor: 'divider',
                background: 'linear-gradient(135deg, #0b1221, #102347)',
                color: 'white',
                boxShadow: 'var(--shadow-strong)',
              }}
            >
              <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">
                <Grid item xs={12} md={8}>
                  <SectionHeading
                    eyebrow="Get started"
                    title="Ready for your next launch?"
                    description="Tell us about your vision and we’ll design a sprint that validates the thesis, assembles the team, and unlocks early momentum."
                    align="left"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Stack spacing={2} alignItems={{ xs: 'flex-start', md: 'flex-end' }}>
                    <Button size="large" color="secondary">
                      Schedule a call
                    </Button>
                    <Typography variant="body2" color="rgba(255,255,255,0.8)">
                      We reply within two business days.
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </Stack>
        </Container>
      </Box>
    </main>
  );
}
