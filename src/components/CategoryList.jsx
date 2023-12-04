import { Link } from 'react-router-dom';
import { imgs, categories } from '../data';

const [
	imgPython,
	imgJavaScript,
	imgReact,
	imgNextJS,
	imgHtml,
	imgCss,
	imgTypeScript,
] = imgs;

export const CategoryList = () => {
	return (
		<div className='flex flex-row flex-wrap justify-center gap-4 mt-10'>
      {/* Category Python */}
			<Link
				to={`/category/${categories.python}`}
				className='flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 transition-all hover:scale-105'>
				<div className='p-5 flex justify-center items-center'>
					<img
						src={imgPython}
						alt={`Category ${categories.python}`}
						className='w-36'
					/>
				</div>

				<h1 className='text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5'>
					{categories.python}
				</h1>
			</Link>
      {/* Category JavaScript*/}
			<Link
				to={`/category/${categories.javascript}`}
				className='flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 transition-all hover:scale-105'>
				<div className='p-5 flex justify-center items-center'>
					<img
						src={imgJavaScript}
						alt={`Category ${categories.javascript}`}
						className='w-36'
					/>
				</div>

				<h1 className='text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5'>
					{categories.javascript}
				</h1>
			</Link>
      {/* Category React */}
			<Link
				to={`/category/${categories.react}`}
				className='flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 transition-all hover:scale-105'>
				<div className='p-5 flex justify-center items-center'>
					<img
						src={imgReact}
						alt={`Category ${categories.react}`}
						className='w-36'
					/>
				</div>

				<h1 className='text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5'>
					{categories.react}
				</h1>
			</Link>
     
      {/* Category NextJS */}
			<Link
				to={`/category/${categories.nextjs}`}
				className='flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 transition-all hover:scale-105'>
				<div className='p-5 flex justify-center items-center'>
					<img
						src={imgNextJS}
						alt={`Category ${categories.nextjs}`}
						className='w-36'
					/>
				</div>

				<h1 className='text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5'>
					{categories.nextjs}
				</h1>
			</Link>
      {/* Category Html */}
			<Link
				to={`/category/${categories.html}`}
				className='flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 transition-all hover:scale-105'>
				<div className='p-5 flex justify-center items-center'>
					<img
						src={imgHtml}
						alt={`Category ${categories.html}`}
						className='w-36'
					/>
				</div>

				<h1 className='text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5'>
					{categories.html}
				</h1>
			</Link>
      {/* Category Css */}
			<Link
				to={`/category/${categories.css}`}
				className='flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 transition-all hover:scale-105'>
				<div className='p-5 flex justify-center items-center'>
					<img
						src={imgCss}
						alt={`Category ${categories.css}`}
						className='w-36'
					/>
				</div>

				<h1 className='text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5'>
					{categories.css}
				</h1>
			</Link>
       {/* Category TypeScript */}
			<Link
				to={`/category/${categories.typescript}`}
				className='flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 transition-all hover:scale-105'>
				<div className='p-5 flex justify-center items-center'>
					<img
						src={imgTypeScript}
						alt={`Category ${categories.typescript}`}
						className='w-36'
					/>
				</div>

				<h1 className='text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5'>
					{categories.typescript}
				</h1>
			</Link>
		</div>
	);
};
