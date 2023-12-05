import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export const CategoryCard = ({ category, alt, src }) => {
	return (
		<Link
			to={`/category/${category}`}
			className={`flex flex-col  justify-between bg-slate-500 rounded-2xl overflow-hidden transition-colors  hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 hover:scale-105 shadow-2xl`}>
			<div className='p-5 flex justify-center items-center'>
				<img src={src} alt={alt} className='w-36' />
			</div>

			<h1 className='text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5'>
				{category}
			</h1>
		</Link>
	);
};
