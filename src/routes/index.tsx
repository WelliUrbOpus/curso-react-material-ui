import { Routes, Route, Navigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppThemeContext, useDrawerContext } from '../shared/contexts';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { useEffect } from 'react';


export const AppRoutes = () => {
  const { toggleTheme } = useAppThemeContext();
  const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    setDrawerOptions([
      {
        path: '/home',
        icon: 'Home',
        label: 'Home'
      },
      {
        path: '/cidades',
        icon: 'Settings',
        label: 'Cidades'
      },
      {
        path: '/settings',
        icon: 'Settings',
        label: 'Settings'
      }
    ]);
  });

  return (
    <Routes>
      <Route path='/home' element={<>Home</>} />

      <Route path='/settings' element={<>Configurações</>} />

      <Route path='/cidades' element={<>Cidades</>} />

      <Route path='*' element={<Navigate to={'/home'} />} />
    </Routes>

  );

};

