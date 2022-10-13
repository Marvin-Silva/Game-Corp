import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { success } from '../__mocks__/success';
import { SuccessListToolBar } from '../components/product/success-list-tool-bar';
import { SuccessCard } from '../components/product/success-card';
import { DashboardLayout } from '../components/dashboard-layout';

const Page = () => (
    <>
        <Head>
            <title>
                Success
            </title>
        </Head>
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 8
            }}
        >
            <Container maxWidth={false}>
                <SuccessListToolBar />
                <Box sx={{ pt: 3 }}>
                    <Grid
                        container
                        spacing={3}
                    >
                        {success.map((success) => (
                            <Grid
                                item
                                key={success.id}
                                lg={4}
                                md={6}
                                xs={12}
                            >
                                <SuccessCard product={success} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        pt: 3
                    }}
                >
                    <Pagination
                        color="primary"
                        count={3}
                        size="small"
                    />
                </Box>
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
