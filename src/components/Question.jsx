/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Results } from './Results';

export const Question = ({
	filteredQuestion,
	questionsFiltered,
	indexQuestion,
	setIndexQuestion,
	setActiveQuiz,
}) => {
	const [score, setScore] = useState(0);
	const [selectAnswerIndex, setSelectAnswerIndex] = useState(null);
	const [answered, setAnswered] = useState(false);
	const [answersRandom, setAnswersRandom] = useState([]);
	const [activeResults, setActiveResults] = useState(false);

	useEffect(() => {
		const answers = [
			...filteredQuestion.incorrect_answers,
			filteredQuestion.correct_answer,
		];

		setAnswersRandom(answers.sort(() => Math.random() - 0.5));
	}, [filteredQuestion]);

	const checkAnswer = (answerText, index) => {
		if (answerText === filteredQuestion.correct_answer) {
			setScore(score + 1);
		}
		setSelectAnswerIndex(index);
		setAnswered(true);
	};

	const onNextQuestion = () => {
		setIndexQuestion(indexQuestion + 1);
		setSelectAnswerIndex(null);
		setAnswered(false);
	};

	const onReset = () => {
		setScore(0);
		setActiveQuiz(false);
		setIndexQuestion(0);
	};

	return (
		<>
			{activeResults ? (
				<Results
					questionsFiltered={questionsFiltered}
					score={score}
					onReset={onReset}
				/>
			) : (
				<div className='flex flex-col w-[800px] mt-10 justify-between shadow-xl bg-slate-100  p-10 rounded-lg'>
					<div className='flex justify-between my-5'>
						<span className='text-xl font-bold'>
							{/* Number actual question and number all questions */}
							{indexQuestion + 1} / {questionsFiltered.length}
						</span>
						<div>
							<span className='font-semibold'>Difficult: </span>
							<span className='font-bold'>
								{/* Difficult of a question */}
								{filteredQuestion.difficulty}
							</span>
						</div>
					</div>

					<button
						className='border border-zinc-300 text-gray-500 bg-white px-5 py-2 my-5 rounded-lg shadow-xl hover:shadow-inner transition-all font-bold  hover:text-gray-600'
						onClick={onReset}>
						Restart
					</button>
					<div>
						<h1 className='font-bold my-2'>{filteredQuestion.question}</h1>
					</div>

					{/* answers */}
					<div className='grid grid-cols-2 gap-5  '>
						{/* map the layout of good and bad answers */}
						{answersRandom.map((answer, index) => (
							<button
								className={`border border-zinc-500 p-5 rounded-lg flex justify-center items-center hover:scale-105 hover:bg-white
                                ${
																	selectAnswerIndex !== null &&
																	index === selectAnswerIndex
																		? answer === filteredQuestion.correct_answer
																			? 'bg-green-500'
																			: 'bg-red-500'
																		: ''
																}
                                `}
								key={answer}
								onClick={() => checkAnswer(answer, index)}
								disabled={answered && selectAnswerIndex !== index}>
								<p className='font-medium text-center-text sm'>{answer}</p>
							</button>
						))}
					</div>
					{/* Conditional to show the next question button at the end of the question */}
					{indexQuestion + 1 === questionsFiltered.length ? (
						<button
							className='border border-zinc-300 text-gray-500 bg-white px-5 py-2 my-5 rounded-lg shadow-xl hover:shadow-inner transition-all font-bold  hover:text-gray-600'
							onClick={() => {
								setAnswered(false);
								setActiveResults(true);
							}}>
							Finish
						</button>
					) : (
						<button
							className='border border-zinc-300 text-gray-500 bg-white px-5 py-2 my-5  rounded-lg shadow-xl hover:shadow-inner transition-all font-bold  hover:text-gray-600 '
							onClick={onNextQuestion}>
							Next Question
						</button>
					)}
				</div>
			)}
		</>
	);
};
