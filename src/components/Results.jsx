/* eslint-disable react/prop-types */
export const Results = ({ score, questionsFiltered, onReset }) => {
	return (
		<div className='flex flex-col bg-slate-100 border justify-evenly items-center shadow-xl rounded-lg w-[600px] h-[600px] gap-5'>
			<h1 className='text=4xl font-bold'>Results</h1>
			<div className='flex flex-col gap-5 text-center text-lg font-bold'>
				<span>You guessed right</span>
				<span className='font-black bg-gradient-to-r from-sky-300 to-gray-500 bg-clip-text text-transparent text-6xl animate-pulse'>
					{((score / questionsFiltered.length) * 100).toFixed(0)}%
				</span>
				Of the questions ({score} of {questionsFiltered.length})
			</div>

			<button
				className='border border-zinc-300 text-gray-500 bg-white px-5 py-2 rounded-lg shadow-xl hover:shadow-inner transition-all font-bold  hover:text-gray-600 hover:border-zinc-400'
				onClick={onReset}>
				Lets go again
			</button>
		</div>
	);
};
