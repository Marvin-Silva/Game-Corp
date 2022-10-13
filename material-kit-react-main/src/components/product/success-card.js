import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { Clock as ClockIcon } from '../../icons/clock';
import { Download as DownloadIcon } from '../../icons/download';
import CheckIcon from '@mui/icons-material/Check';
import { EmojiEvents } from '@mui/icons-material';

export const SuccessCard = ({ product, ...rest }) => (
    <Card
        sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        }}
        {...rest}
    >
        <CardContent>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    pb: 3
                }}
            >
                <Avatar
                    alt="Product"
                    src={product.media}
                    variant="square"
                    sx={{ width: '100%', height: '100%' }}
                />
            </Box>
            <Typography
                align="center"
                color="textPrimary"
                gutterBottom
                variant="h5"
            >
                {product.title}
            </Typography>
            <Typography
                align="center"
                color="textPrimary"
                variant="body1"
            >
                {product.description}
            </Typography>
        </CardContent>
        <Box sx={{ flexGrow: 1 }} />
        <Divider />
        <Box sx={{ p: 2 }}>
            <Grid
                container
                spacing={2}
                sx={{ justifyContent: 'space-between' }}
            >
                <Grid
                    item
                    sx={{
                        alignItems: 'center',
                        display: 'flex'
                    }}
                >
                    <ClockIcon color="action" />
                    <Typography
                        color="textSecondary"
                        display="inline"
                        sx={{ pl: 1 }}
                        variant="body2"
                    >
                        Updated 2hr ago
                    </Typography>
                </Grid>
                <Grid
                    item
                    sx={{
                        alignItems: 'center',
                        display: 'flex'
                    }}
                >
                    <EmojiEvents color="action" />
                    <Typography
                        color="textSecondary"
                        display="inline"
                        sx={{ pl: 1 }}
                        variant="body2"
                    >
                        {product.totalDownloads}
                        {' '}
                        Success
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    </Card>
);

SuccessCard.propTypes = {
    product: PropTypes.object.isRequired
};
