import { Routes, Route, Navigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppThemeContext, useDrawerContext } from '../shared/contexts';
import { Box, useMediaQuery, useTheme } from '@mui/material';


export const AppRoutes = () => {
  const { toggleTheme } = useAppThemeContext();
  const { toggleDrawerOpen } = useDrawerContext();
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));


  return (
    <Routes>
      <Route path='/home' element={
        <Button style={{ display: smDown ? 'inline-flex' : 'none' }} variant="contained" color="primary" onClick={toggleDrawerOpen}>
          <MenuIcon />
        </Button>}
      />

      <Route path='/cidade' element={<p>Cidades</p>} />




      <Route path='*' element={<Navigate to={'/home'} />} />
    </Routes>

  );

};

