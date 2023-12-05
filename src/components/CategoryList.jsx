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
		<div className='grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-4 mt-10 group rounded-lg border border-transparent px-5 py-4 '>
			{/* Category Python */}

			<CategoryCard
				category={categories.python}
				src={imgPython}
				alt={`Category ${categories.python}`}
				
			/>

			{/* Category JavaScript*/}

			<CategoryCard
				category={categories.javascript}
				src={imgJavaScript}
				alt={`Category ${categories.javascript}`}
				
			/>
			{/* Category React */}
			<CategoryCard
				category={categories.react}
				src={imgReact}
				alt={`Category ${categories.react}`}
				
			/>

			{/* Category NextJS */}

			<CategoryCard
				category={categories.nextjs}
				src={imgNextJS}
				alt={`Category ${categories.nextjs}`}
				
			/>

			{/* Category Html */}

			<CategoryCard
				category={categories.html}
				src={imgHtml}
				alt={`Category ${categories.html}`}
				
			/>

			{/* Category Css */}

			<CategoryCard
				category={categories.css}
				src={imgCss}
				alt={`Category ${categories.css}`}
				
			/>

			{/* Category TypeScript */}

			<CategoryCard
				category={categories.typescript}
				src={imgTypeScript}
				alt={`Category ${categories.typescript}`}
				
			/>
		</div>
	);
};
