export const Question = () => {
	return (
		<>
			<div className='flex flex-col justify-between shadow-md shadow-slate-300 w-[600px] h-[600px] p-10 rounded-lg'>
				<div className='flex justify-between'>
					<span className='text-xl font-bold'>
                        {/* Number actual question and number all questions */}

                    </span>
                    <div>
                        <span className='font-semibold'>
                            Difficult:
                        </span>
                        <span className='font-bold'>
                            {/* Difficult of a question */}

                        </span>
                    </div>
				</div>

                <button className='border px-5 py-2 rounded-lg font-bold transition-all hover:bg-yellow-500 hover:text-gray-900'>
                    Restart
                </button>
                <div>
                    <h1 className='font-bold'>Question</h1>
                </div>

                {/* answers */}
                <div className='grid grid-cols-2 gap-5'>
                {/* map the layout of good and bad answers */}
                <button className="border-p-5 rounded-lg flex justify-center items-center hover:scale-105">
                    <p className="font-medium text-center-text sm">
                    Any response
                    </p>
                </button>
                </div>
                {/* Conditional to show the next question button at the end of the question */}
                <button className="border-2 border-yellow-600 text-yellow-600 rounded-md px-5 py-2 hover:bg-yellow-600 hover:text-black font-medium">
                Finish or next question
                </button>


			</div>
		</>
	);
};
