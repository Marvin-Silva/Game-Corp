import { formatDistanceToNow, subHours } from 'date-fns';
import { v4 as uuid } from 'uuid';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const avatars = [
  {
    id: uuid(),
    name: 'Elodie Renauld',
    imageUrl: '/static/images/avatars/avatar_2.png',
    updatedAt: subHours(Date.now(), 2)
  },
  {
    id: uuid(),
    name: 'Joseph Alain',
    imageUrl: '/static/images/avatars/avatar_3.png',
    updatedAt: subHours(Date.now(), 2)
  },
  {
    id: uuid(),
    name: 'Jean Claude',
    imageUrl: '/static/images/avatars/avatar_4.png',
    updatedAt: subHours(Date.now(), 3)
  },
  {
    id: uuid(),
    name: 'Lucas Studio',
    imageUrl: '/static/images/avatars/avatar_5.png',
    updatedAt: subHours(Date.now(), 5)
  },
  {
    id: uuid(),
    name: 'Marianna Cabral',
    imageUrl: '/static/images/avatars/avatar_6.png',
    updatedAt: subHours(Date.now(), 9)
  }
];

export const LatestProducts = (props) => (
  <Card {...props}>
    <CardHeader
      subtitle={`${avatars.length} in total`}
      title="Chat "
    />
    <Divider />
    <List>
      {avatars.map((avatar, i) => (
        <ListItem
          divider={i < avatars.length - 1}
          key={avatar.id}
        >
          <ListItemAvatar>
            <img
              alt={avatar.name}
              src={avatar.imageUrl}
              style={{
                height: 48,
                width: 48
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={avatar.name}
            secondary={`Active`}
          />
          <IconButton
            edge="end"
            size="small"
          >
            <MoreVertIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);
