import { Drawer, Box, useTheme, Avatar, Divider, List, ListItemButton, ListItemText, ListItemIcon, useMediaQuery } from '@mui/material';
import { Home, Settings, Add, DarkMode } from '@mui/icons-material';
import { useAppThemeContext, useDrawerContext } from '../../contexts';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';

interface IMenuLateralProps {
  children: React.ReactNode;
}

interface IListItemLinkProps {
  to: string;
  label: string;
  icon: string;
  onClick: (() => void) | undefined;
}

interface CustonIconProps {
  tag: string;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({ to, icon, label, onClick }) => {
  const navigate = useNavigate();

  const resolvedPath = useResolvedPath(to);
  const match = useMatch({ path: resolvedPath.pathname, end: false });

  const CustonIcon: React.FC<CustonIconProps> = ({ tag }) => {

    if (tag === 'Home') return <Home />;
    if (tag === 'Settings') return <Settings />;


    return <Add />;
  };

  const handleClick = () => {
    navigate(to);
    onClick?.();
  };

  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <CustonIcon tag={icon} />
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();
  const { toggleTheme } = useAppThemeContext();

  return (
    <>
      <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>

        <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">

          <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">

            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
            />

          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav" >
              {drawerOptions.map(drawerOptions => (
                <ListItemLink
                  to={drawerOptions.path}
                  key={drawerOptions.path}
                  icon={drawerOptions.icon}
                  label={drawerOptions.label}
                  onClick={smDown ? toggleDrawerOpen : undefined}
                />
              ))}

            </List>
          </Box>

          <Box>
            <List component="nav" >
              <ListItemButton onClick={toggleTheme}>
                <ListItemIcon>
                  <DarkMode />
                </ListItemIcon>
                <ListItemText primary='Alternar tema' />
              </ListItemButton>

            </List>
          </Box>

        </Box>

      </Drawer>

      <Box height="100vh" marginLeft={smDown ? theme.spacing(0) : theme.spacing(29)}>
        {children}
      </Box>

    </>
  );
};