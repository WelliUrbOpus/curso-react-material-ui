import { Routes, Route, Navigate } from 'react-router-dom'
import Button from '@mui/material/Button'


export const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/home' element={<Button variant="text" color="primary">teste</Button>} />
            <Route path='/cidade' element={<p>Cidades</p>} />



            <Route path='*' element={<Navigate to={'/home'} />} />
        </Routes>

    );

}

