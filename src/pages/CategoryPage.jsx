import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { questions, imgs } from '../data';
import { Question } from '../components/Question';

const shuffleArray = array => {
	const newArray = array.sort(() => Math.random() - 0.5);
	return newArray.slice(0, 5);
};

export const CategoryPage = () => {
	// Read URL parameter
	const { category } = useParams();

	const [imgCategory] = imgs.filter(
		img => img === `/src/assets/${category.toLowerCase()}.png`
	);

	const [questionsFiltered, setQuestionsFiltered] = useState(
		questions.filter(question => question.category === category)
	);
	// const [questionsFiltered, setQuestionsFiltered] = useState(
	// 	questions.filter(question => question.category === category))

	const [indexQuestion, setIndexQuestion] = useState(0);
	const [activeQuiz, setActiveQuiz] = useState(false);

	useEffect(() => {
		const newQuestions = shuffleArray(questionsFiltered);
		setQuestionsFiltered(newQuestions);
	}, []);
	// ?????????????????
	return (
		<div
			className='container my-8 flex flex-col items-center justify-center gap-10 border bg-slate-100 shadow-xl rounded-lg w-[600px] h-[600px]'
			>
			{activeQuiz ? (
				<Question
					filteredQuestion={questionsFiltered[indexQuestion]}
					setIndexQuestion={setIndexQuestion}
					indexQuestion={indexQuestion}
					questionsFiltered={questionsFiltered}
					setActiveQuiz={setActiveQuiz}
				/>
			) : (
				<>
					<div className='flex flex-col gap-5'>
						<h1 className='text-3xl text-teal-900 text-center font-bold'>
							{category}
						</h1>

						<div className='flex justify-center items-center'>
							<img src={imgCategory} alt={category} className='w-72' />
						</div>
					</div>

					<button
						className='border border-zinc-300 text-gray-500 bg-white px-5 py-2 rounded-lg shadow-xl hover:shadow-inner transition-all font-bold  hover:text-gray-600 hover:border-zinc-400'
						onClick={() => setActiveQuiz(true)}>
						Start Quiz
					</button>
				</>
			)}
		</div>
	);
};
