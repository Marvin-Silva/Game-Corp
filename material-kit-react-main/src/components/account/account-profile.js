import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@mui/material';

import { TasksProgress } from '../dashboard/tasks-progress.js';

const user = {
  avatar: '/static/images/avatars/avatar_1.png',
  city: 'Paris',
  country: 'France',
  jobTitle: 'Developer',
  name: 'John Smith',
  timezone: 'GTM-1'
};

export const AccountProfile = (props) => (
  <Card {...props}>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Avatar
          src={user.avatar}
          sx={{
            height: 64,
            mb: 2,
            width: 64
          }}
        />
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h5"
        >
          {user.name}
        </Typography>

        <Typography
          color="textPrimary"
          gutterBottom
          variant="h8"
        >
          {user.jobTitle}
        </Typography>
        <TasksProgress />

        <Typography
          color="textSecondary"
          variant="body2"
        >
          {`${user.city}, ${user.country}`}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.timezone}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    <CardActions>
      <Button
        color="primary"
        fullWidth
        variant="text"
      >
        Upload picture
      </Button>
    </CardActions>
  </Card>
);
