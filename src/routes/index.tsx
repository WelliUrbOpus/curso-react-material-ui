import { Routes, Route, Navigate } from 'react-router-dom';
import {  useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';
import { Cidades, Dashboard, Settings } from '../pages';


export const AppRoutes = () => {
  const {  setDrawerOptions } = useDrawerContext();

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
  },[]);

  return (
    <Routes>
      <Route path='/home' element={<Dashboard />} />

      <Route path='/cidades' element={<Cidades/>} />

      <Route path='/settings' element={<Settings/>} />
 
      <Route path='*' element={<Navigate to={'/home'} />} />
    </Routes>

  );

};

