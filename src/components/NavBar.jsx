
import { Link } from 'react-router-dom';

export const NavBar = () => {
	return (
		<header className='bg-gray-900 py-5 flex mx-auto justify-center'>
			<Link to='/'>
				<h1 className='text-white text-3xl font-bold hover:scale-110 transition-all duration-500' >Quiz App</h1>
			</Link>
		</header>
	);
};
