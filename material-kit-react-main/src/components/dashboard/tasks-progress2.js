import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid, IconButton,
  LinearProgress,
  StepIcon,
  Typography
} from '@mui/material';
import InsertChartIcon from '@mui/icons-material/InsertChartOutlined';
import {
  ArrowBackIosNewRounded,
  ArrowCircleRight,
  CoffeeMakerRounded,
  StarsRounded
} from '@mui/icons-material';

export const TasksProgress2 = (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            LEVEL PROGRESS
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            Level 2 - 75.5%
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: '#1ed760',
              height: 56,
              width: 56
            }}
          >
            <StarsRounded/>
          </Avatar>
        </Grid>
      </Grid>
      <Box sx={{ pt: 3 }}>
        <LinearProgress
          value={75.5}
          variant="determinate"
        />
      </Box>
    </CardContent>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'right' }}>
        <Grid item>
          <Typography
            color="textSecondary"
            variant="overline"
          >
            Next Pass Reward
          </Typography>
          <Typography>
            A free coffee ! &nbsp;&nbsp;
            <ArrowCircleRight/>
          </Typography>
        </Grid>
        <Grid item>
          <Avatar  sx={{ height: 56, width: 56, backgroundColor: '#000000' }}>
            <CoffeeMakerRounded/>
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
