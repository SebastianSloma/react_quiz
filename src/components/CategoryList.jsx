import { imgs, categories } from '../data';
import { CategoryCard } from './CategoryCard';

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

			<CategoryCard
				category={categories.python}
				src={imgPython}
				alt={`Category ${categories.python}`}
				gradientColor='from-blue-500 to-purple-500'
			/>

			{/* Category JavaScript*/}

			<CategoryCard
				category={categories.javascript}
				src={imgJavaScript}
				alt={`Category ${categories.javascript}`}
				gradientColor='from-blue-500 to-purple-500'
			/>
			{/* Category React */}
			<CategoryCard
				category={categories.react}
				src={imgReact}
				alt={`Category ${categories.react}`}
				gradientColor='from-blue-500 to-purple-500'
			/>

			{/* Category NextJS */}

			<CategoryCard
				category={categories.nextjs}
				src={imgNextJS}
				alt={`Category ${categories.nextjs}`}
				gradientColor='from-blue-500 to-purple-500'
			/>

			{/* Category Html */}

			<CategoryCard
				category={categories.html}
				src={imgHtml}
				alt={`Category ${categories.html}`}
				gradientColor='from-blue-500 to-purple-500'
			/>

			{/* Category Css */}

			<CategoryCard
				category={categories.css}
				src={imgCss}
				alt={`Category ${categories.css}`}
				gradientColor='from-blue-500 to-purple-500'
			/>

			{/* Category TypeScript */}

			<CategoryCard
				category={categories.typescript}
				src={imgTypeScript}
				alt={`Category ${categories.typescript}`}
				gradientColor='from-gray-200 to-gray-500'
			/>
		</div>
	);
};
