import { Drawer, Button, Box, useTheme, Avatar, Divider, List, ListItemButton, ListItemText, ListItemIcon, Icon } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';


interface IMenuLateralProps {
  children: React.ReactNode;
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <>
      <Drawer variant='permanent'>

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

              <ListItemButton >
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>

                <ListItemText primary="Home" />

              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="Btn 2" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="Btn 3" />
              </ListItemButton>

            </List>
          </Box>

        </Box>

      </Drawer>

      <Box height="100vh" marginLeft={theme.spacing(28)}>

        {children}

      </Box>

    </>
  );
};