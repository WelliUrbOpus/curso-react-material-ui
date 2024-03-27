import { Routes, Route, Navigate } from 'react-router-dom'


export const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/home' element={<p>Wellington Home</p>}/>
            <Route path='/cidade' element={<p>Cidades</p>}/>



            <Route path='*' element={<Navigate to={'/home'}/>}/>
        </Routes>
        
    );

}

