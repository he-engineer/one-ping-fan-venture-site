import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import TwitterIcon from '@mui/icons-material/Twitter';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/zenshift', icon: <LinkedInIcon /> },
  { label: 'Twitter', href: 'https://twitter.com/zenshift', icon: <TwitterIcon /> },
];

const contactInfo = {
  email: 'hello@onepingfan.com',
  phone: '+1 (415) 555-0123',
  location: 'San Francisco, CA',
};

export default function HomePage() {
  return (
    <main>
      <Box
        component="section"
        sx={{
          background: 'linear-gradient(135deg, #0f172a 0%, #111827 40%, #0b3b5b 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3} alignItems="flex-start">
            <Chip
              label="Founder-led venture studio"
              color="primary"
              sx={{ backgroundColor: 'rgba(255,255,255,0.12)', color: 'white' }}
            />
            <Typography variant="h2" component="h1" fontWeight={800} sx={{ maxWidth: 720 }}>
              One Ping Fan builds resilient ventures with calm, confident execution.
            </Typography>
            <Typography variant="h6" sx={{ maxWidth: 640, color: 'rgba(255,255,255,0.8)' }}>
              From zero to one and beyond, we pair disciplined product thinking with tested go-to-market playbooks
              to deliver durable growth for modern operators.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                size="large"
                variant="contained"
                color="primary"
                href="#contact"
                endIcon={<ArrowForwardIcon />}
              >
                Start a conversation
              </Button>
              <Button size="large" variant="outlined" color="inherit" href="#portfolio">
                View our portfolio focus
              </Button>
            </Stack>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              {[['48', 'combined launches'], ['12', 'active operators in residence'], ['3x', 'average lift in ARR within 12 months']].map(
                ([stat, description]) => (
                  <Grid item xs={12} sm={4} key={description}>
                    <Stack spacing={1}>
                      <Typography variant="h4" fontWeight={800}>
                        {stat}
                      </Typography>
                      <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>{description}</Typography>
                    </Stack>
                  </Grid>
                ),
              )}
            </Grid>
          </Stack>
        </Container>
      </Box>

      <Box component="section" id="portfolio" sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Stack spacing={6}>
            <Stack spacing={1}>
              <Typography variant="overline" color="text.secondary">
                Venture theses
              </Typography>
              <Typography variant="h4" component="h2" fontWeight={700}>
                We focus on operational excellence for critical teams.
              </Typography>
              <Typography color="text.secondary" sx={{ maxWidth: 760 }}>
                Every build is anchored in measurable outcomes: faster deployments, safer operations, and happier teams.
                We invest our experience where tooling and trust create outsized leverage.
              </Typography>
            </Stack>

            <Grid container spacing={3}>
              {[{
                title: 'ZenShift',
                description:
                  'An orchestration platform that keeps distributed teams aligned on mission-critical deployments without sacrificing calmness.',
                highlights: ['Operator-first workflows', 'Predictive scheduling', 'Human + AI command center'],
              },
              {
                title: 'SignalOps',
                description:
                  'Telemetry intelligence that surfaces actionable signals across infrastructure, product, and customer experience.',
                highlights: ['Unified observability', 'AI-assisted runbooks', 'Executive-ready insights'],
              },
              {
                title: 'Northbound',
                description:
                  'Strategic advisory for founders who want to scale with intention through capital-efficient sequencing.',
                highlights: ['Launch labs', 'Revenue architecture', 'Leadership coaching'],
              }].map((venture) => (
                <Grid item xs={12} md={4} key={venture.title}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent>
                      <Stack spacing={2}>
                        <Typography variant="h6" fontWeight={700}>
                          {venture.title}
                        </Typography>
                        <Typography color="text.secondary">{venture.description}</Typography>
                        <Stack spacing={1}>
                          {venture.highlights.map((item) => (
                            <Stack direction="row" spacing={1} alignItems="center" key={item}>
                              <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: 'primary.main' }} />
                              <Typography color="text.primary">{item}</Typography>
                            </Stack>
                          ))}
                        </Stack>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>

      <Box component="section" id="zenshift" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <Typography variant="overline" color="text.secondary">
                  Featured platform
                </Typography>
                <Typography variant="h4" component="h3" fontWeight={700}>
                  ZenShift keeps complex teams synchronized without the chaos.
                </Typography>
                <Typography color="text.secondary">
                  Built for operations leaders, ZenShift blends predictive scheduling, AI-assisted incident handling, and crisp
                  executive reporting. The result is a calmer, more reliable rhythm for your most critical work.
                </Typography>
                <Stack spacing={1}>
                  {['Harmonize deployments across distributed crews', 'Eliminate noisy escalations with contextual runbooks', 'Build executive trust with real-time clarity'].map(
                    (point) => (
                      <Stack direction="row" spacing={1} alignItems="center" key={point}>
                        <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: 'primary.main' }} />
                        <Typography color="text.primary">{point}</Typography>
                      </Stack>
                    ),
                  )}
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 1 }}>
                  <Button variant="contained" size="large" href="#contact" endIcon={<ArrowForwardIcon />}>
                    Book a ZenShift walkthrough
                  </Button>
                  <Button variant="outlined" size="large" href="mailto:hello@onepingfan.com?subject=ZenShift Partnership">
                    Partner with ZenShift
                  </Button>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: { xs: 2, md: 3 }, backgroundColor: '#0f172a', color: 'white' }}>
                <Stack spacing={2}>
                  <Typography variant="subtitle1" fontWeight={700}>
                    Calm command center
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>
                    A single pane of glass for orchestrating change windows, mission-critical comms, and accountability. ZenShift
                    reduces cognitive load so leaders can focus on momentum.
                  </Typography>
                  <Divider sx={{ borderColor: 'rgba(255,255,255,0.12)' }} />
                  <Grid container spacing={2}>
                    {[['2.5x', 'Faster approvals with AI copilots'], ['35%', 'Reduction in paging volume'], ['24/7', 'Executive-ready situational awareness']].map(
                      ([value, caption]) => (
                        <Grid item xs={12} sm={4} key={caption}>
                          <Stack spacing={0.5}>
                            <Typography variant="h5" fontWeight={800}>
                              {value}
                            </Typography>
                            <Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>{caption}</Typography>
                          </Stack>
                        </Grid>
                      ),
                    )}
                  </Grid>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="footer" id="contact" sx={{ backgroundColor: '#0b1224', color: 'white', py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Stack spacing={2}>
                <Typography variant="h4" component="h4" fontWeight={800}>
                  Ready to build your next venture?
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>
                  Tell us about your roadmap, and we&apos;ll share a focused plan within two business days.
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button variant="contained" color="primary" size="large" href="mailto:hello@onepingfan.com?subject=Venture inquiry">
                    Talk to a founder
                  </Button>
                  <Button variant="outlined" color="inherit" size="large" href="#zenshift">
                    Explore ZenShift
                  </Button>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card sx={{ backgroundColor: 'rgba(255,255,255,0.06)', color: 'white' }}>
                <CardContent>
                  <Stack spacing={2}>
                    <Typography variant="subtitle1" fontWeight={700}>
                      Contact
                    </Typography>
                    <Stack spacing={1.5}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <EmailIcon fontSize="small" />
                        <Typography>{contactInfo.email}</Typography>
                      </Stack>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <PhoneIcon fontSize="small" />
                        <Typography>{contactInfo.phone}</Typography>
                      </Stack>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <LocationOnIcon fontSize="small" />
                        <Typography>{contactInfo.location}</Typography>
                      </Stack>
                    </Stack>
                    {socialLinks.length > 0 && (
                      <Stack spacing={1}>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                          Connect with us
                        </Typography>
                        <Stack direction="row" spacing={1}>
                          {socialLinks.map((link) => (
                            <IconButton
                              key={link.label}
                              aria-label={link.label}
                              href={link.href}
                              target="_blank"
                              rel="noreferrer"
                              sx={{ color: 'white' }}
                            >
                              {link.icon}
                            </IconButton>
                          ))}
                        </Stack>
                      </Stack>
                    )}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </main>
  );
}
