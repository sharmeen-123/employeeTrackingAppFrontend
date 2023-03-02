import PropTypes from 'prop-types';
import "./header.css"

import {
  createStyles,
  Container,
  Avatar,
  Group,
  Text,
  Menu,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: theme.spacing.sm,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[2]
    }`,
    
  },

  mainSection: {
    paddingBottom: theme.spacing.sm,
  },

  user: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
     padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: 'background-color 100ms ease',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    },

    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },
  
 


}));


export function HeaderTabs({ user, text }) {
  const { classes } = useStyles();

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection} >
        <Group position='apart'>
        <Text weight={900} size="xl" sx={{ lineHeight: 2 }} >
                    {text}
        </Text>

          <Menu
          >
            <Menu.Target>
              
                <Group spacing={7}>
                  <Text weight={700} size="sm" sx={{ lineHeight: 2 }} >
                    {user.name}
                  </Text>
                  <Avatar src={user.image} alt={user.name} radius="xl" size={50} />
                </Group>
              
            </Menu.Target>
           
          </Menu>
        </Group>
      </Container>
     
    </div>
  );
}

HeaderTabs.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired,
};

export default HeaderTabs;