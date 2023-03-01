import { useState } from 'react';
import "./navbar.css";
import { NavLink } from "react-router-dom";
import {
  IconHome2,
  IconMapPinFilled,
  IconSettings,
  IconBrandMastercard,
  IconUser,
} from '@tabler/icons-react';
import { createStyles, Navbar } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('icon');
  return {
    header: {
      // paddingBottom: theme.spacing.md,
      // marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.green[4]
        }`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.green[3],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.green[3],
        color: theme.colorScheme === 'dark' ? theme.white : theme.colors.green[9],

        [`& .${icon}`]: {
          color: theme.colorScheme === 'dark' ? theme.white : theme.colors.green[9],
        },
      },
    },

    linkIcon: {
      ref: icon,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.green[3],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor: theme.fn.variant({ variant: 'light', color: theme.colors.green[9] })
          .background,
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        [`& .${icon}`]: {
          color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        },
      },
    },

    footer: {
      borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.green[4]
        }`,
      paddingTop: theme.spacing.md,
    },
  };
});

const data = [
  { link: '/dashboard', label: 'Dashboard', icon: IconHome2 },
  { link: '/user', label: 'Users', icon: IconUser },
  { link: '/location', label: 'Tracking', icon: IconMapPinFilled },
  { link: '/bill', label: 'Payments', icon: IconBrandMastercard },
];

export function NavbarSimple() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Billing');
  const [expandNavbar, setExpandNavbar] = useState(false);

  const links = data.map((item) => (
    <div className='links'>


      <NavLink
        to={item.link}
        className={cx(classes.link, { [classes.linkActive]: item.label === active })}
        activeClassName={classes.linkActive}
        onClick={() => setActive(item.label)}
      >
        <item.icon className={classes.linkIcon} stroke={1.5} />
        {expandNavbar === false ? (<></>) : (<span>{item.label}</span>)}
      </NavLink>


    </div>

  ));

  return (
    <Navbar height={700} p="md" className='navbar'>
      <Navbar.Section grow>
        <div className='navbarArrow'>
          {expandNavbar === false ? (<div
            onClick={() => setExpandNavbar(true)}>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.99711 1.49996L3.14088 9.92351C2.90238 10.2666 2.90231 10.7218 3.14071 11.0649L8.99709 19.4942" stroke="#338B47" stroke-width="4" />
              <rect x="20.7441" y="11.9941" width="18" height="3.5" transform="rotate(180 20.7441 11.9941)" fill="#338B47" />
            </svg>
          </div>) : (<div
            onClick={() => setExpandNavbar(false)}>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.747 19.4942L17.6033 11.0706C17.8418 10.7276 17.8418 10.2724 17.6034 9.92923L11.747 1.49998" stroke="#338B47" stroke-width="4" />
              <rect y="9" width="18" height="3.5" fill="#338B47" />
            </svg>

          </div>)}
        </div>
        {expandNavbar === false ? (<div className='navbarSpace'></div>) :
          (<>
            <div className='navbarTitle'>
              <p>GOOD EARTH</p>
              <h1>BUILDERS</h1>
            </div></>)}

        {links}
      </Navbar.Section>
      <Navbar.Section className={classes.footer}>
        <div className='navbarFooter'>
          <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
            <IconSettings className={classes.linkIcon} stroke={1.5} />
            {expandNavbar === false ? (<div></div>) :
              (<>
                <span>Settings</span></>)}
          </a>

        </div>


      </Navbar.Section>

    </Navbar>
  );
}