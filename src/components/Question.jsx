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

			</div>
		</>
	);
};
