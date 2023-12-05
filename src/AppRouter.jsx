import { Route, Routes } from 'react-router-dom';
import { HomePage, CategoryPage } from './pages';
import { NavBar } from './components/NavBar';

export const AppRouter = () => {
	return (
		<div>
        <NavBar/>

        
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/category/:category' element={<CategoryPage />} />
			</Routes>
		</div>
	);
};
