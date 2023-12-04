import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { questions } from '../data';

const shuffleArray = array => {
	const newArray = array.sort(() => Math.random() - 0.5);
	return newArray.slice(0, 5);
};

export const CategoryPage = () => {
	const { category } = useParams();

	const [questionsFiltered, setQuestionsFiltered] = useState(
		questions.filter(question => question.category === category)
	);

	useEffect(() => {
		const newQuestions = shuffleArray(questionsFiltered);
		setQuestionsFiltered(newQuestions);
	}, [questionsFiltered]);

	return (
		<div
			className='container flex flex-col items-center justify-center gap-10'
			style={{ height: 'calc(100vh - 5rem)' }}>
			CategoryPage
		</div>
	);
};
