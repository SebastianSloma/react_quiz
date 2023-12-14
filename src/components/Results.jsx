import { Link } from 'react-router-dom';





/* eslint-disable react/prop-types */
export const Results = ({ score, questionsFiltered, onReset }) => {
	return (
		<div className='flex flex-col bg-slate-100 border justify-evenly items-center shadow-xl rounded-lg  gap-5 w-[600px]'>
			<h1 className='text=4xl font-bold text-3xl'>Results</h1>
			<div className='flex flex-col gap-5 text-center text-lg font-bold my-5'>
				<span>You guessed right</span>
				<span className='font-black bg-gradient-to-r from-blue-700 to-purple-500 bg-clip-text text-transparent text-6xl animate-pulse'>
					{((score / questionsFiltered.length) * 100).toFixed(0)}%
				</span>
				Of the questions ({score} of {questionsFiltered.length})
			</div>
			<div className='flex gap-10 my-5'>
				<button
					className='border border-zinc-300 text-gray-500 bg-white px-5 py-2 rounded-lg shadow-xl hover:shadow-inner transition-all font-bold  hover:text-gray-600 '
					onClick={onReset}>
					Lets go again
				</button>
				
				<Link to='/'>
				<button className='border border-zinc-300 text-gray-700 bg-white px-5 py-2 rounded-lg shadow-xl hover:shadow-inner transition-all font-bold  hover:text-gray-900'>
					
						Select a new quiz
					
				</button>
				</Link>
			</div>
		</div>
	);
};
