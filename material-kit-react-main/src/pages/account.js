import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { AccountProfile } from '../components/account/account-profile'
import { DashboardLayout } from '../components/dashboard-layout';
import { Doughnut } from 'react-chartjs-2';

const data = {
  datasets: [
    {
      data: [67, 24, 9],
      backgroundColor: ['#3F51B5', '#FB8C00', '#e53935'],
      borderWidth: 8,
      borderColor: '#FFFFFF',
      hoverBorderColor: '#FFFFFF'
    }
  ],
  labels: ['Work', 'Culture', 'Sport']
};

const options = {
  animation: false,
  cutoutPercentage: 80,
  layout: { padding: 0 },
  legend: {
    display: false
  },
  maintainAspectRatio: false,
  responsive: true,

};
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import LaptopIcon from '@mui/icons-material/Laptop';

const devices = [
  {
    title: 'Work',
    value: 67,
    icon: LaptopIcon,
    color: '#3F51B5'
  },
  {
    title: 'Culture',
    value: 24,
    icon: TheaterComedyIcon,
    color: '#FB8C00'
  },
  {
    title: 'Sport',
    value: 9,
    icon: DirectionsRunIcon,
    color: '#E53935'
  },

];

const Page = () => (
  <>
    <Head>
      <title>
        Account
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          Account
        </Typography>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <AccountProfile />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <Box
              sx={{
                height: 300,
                position: 'relative'
              }}
            >
              <Doughnut
                data={data}
                options={options}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                pt: 2
              }}
            >
              {devices.map(({
                color,
                icon: Icon,
                title,
                value
              }) => (
                <Box
                  key={title}
                  sx={{
                    p: 1,
                    textAlign: 'center'
                  }}
                >
                  <Icon color="action" />
                  <Typography
                    color="textPrimary"
                    variant="body1"
                  >
                    {title}
                  </Typography>
                  <Typography
                    style={{ color }}
                    variant="h4"
                  >
                    {value}
                    %
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
