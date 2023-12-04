import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage, CategoryPage } from './pages';
import { NavBar } from './components/NavBar';

const AppRouter = () => {
	return (
		<>
        <NavBar/>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/category/:category' element={<CategoryPage />} />
			</Routes>
		</>
	);
};

export default AppRouter;
