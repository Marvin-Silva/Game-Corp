import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { LatestOrders } from '../components/dashboard/latest-orders';
import { LatestProducts } from '../components/dashboard/latest-products';

import { DashboardLayout } from '../components/dashboard-layout';
import { TasksProgress } from '../components/dashboard/tasks-progress';

const Page = () => (
  <>
    <Head>
      <title>
        Home | Game Corp
      </title>
    </Head>
    <div>
      <Typography
        sx={{
          textAlign:'center',
          marginTop: '50px',
          fontSize: '40px',
          fontWeight: 'Bolder',
          color: "rgb(75,0,130)"
        }}
      >
        Bonjour John Doe,
      </Typography>
      <br/>
    </div>

    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestProducts sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestOrders />
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
