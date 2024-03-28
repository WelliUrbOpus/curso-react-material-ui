import { Routes, Route, Navigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useAppThemeContext } from '../shared/contexts';


export const AppRoutes = () => {
  const { toggleTheme } = useAppThemeContext();

  return (
    <Routes>
      <Route path='/home' element={<Button variant="contained" color="primary" onClick={toggleTheme}>Toggle Theme</Button>} />
      <Route path='/cidade' element={<p>Cidades</p>} />




      <Route path='*' element={<Navigate to={'/home'} />} />
    </Routes>

  );

};

