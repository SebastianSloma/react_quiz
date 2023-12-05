import Python from './assets/python.png';
import JavaScript from './assets/javascript.png';
import React from './assets/react.png';
import NextJS from './assets/nextjs.png';
import Html from './assets/html.png';
import Css from './assets/css.png';
import TypeScript from './assets/typescript.png';

export const imgs = [Python, JavaScript, React, NextJS, Html, Css, TypeScript];

export const categories = {
	python: 'Python',
	javascript: 'JavaScript',
	react: 'React',
	nextjs: 'NextJS',
	html: 'Html',
	css: 'Css',
	typescript: 'TypeScript',
};

const { python, javascript, react, nextjs, html, css, typescript } = categories;

export const questions = [
	{
		id: 1,
		difficulty: 'Easy',
		question: 'What is a correct syntax to output "Hello World" in Python?',
		category: python,
		correct_answer: 'print("Hello World")',
		incorrect_answers: [
			'echo("Hello World")',
			'console.log("Hello World")',
			'p("Hello World")',
		],
	},
	{
		id: 2,
		difficulty: 'Easy',
		question:
			'What is the name of the built-in function that returns the length of a string in Python?',
		category: python,
		correct_answer: 'len',
		incorrect_answers: ['length', 'size', 'strlen'],
	},
	{
		id: 3,
		difficulty: 'Easy',
		question: 'What is the operator for exponentiation in Python?',
		category: python,
		correct_answer: '**',
		incorrect_answers: ['^', 'pow', 'exp'],
	},
	{
		id: 4,
		difficulty: 'Easy',
		question: 'What is the keyword for defining a function in Python?',
		category: python,
		correct_answer: 'def',
		incorrect_answers: ['func', 'function', 'define'],
	},
	{
		id: 5,
		difficulty: 'Medium',
		question:
			'What is the output of this code in Python?\n\nx = 10\ny = 5\nx, y = y, x\nprint(x)',
		category: python,
		correct_answer: '5',
		incorrect_answers: ['10', '15', 'SyntaxError'],
	},
	{
		id: 6,
		difficulty: 'Medium',
		question:
			'What is the name of the module that provides basic mathematical operations in Python?',
		category: python,
		correct_answer: 'math',
		incorrect_answers: ['cmath', 'numpy', 'scipy'],
	},
	{
		id: 7,
		difficulty: 'Medium',
		question:
			'What is the term for a sequence of characters enclosed in single or double quotes in Python?',
		category: python,
		correct_answer: 'string',
		incorrect_answers: ['text', 'char', 'str'],
	},
	{
		id: 8,
		difficulty: 'Medium',
		question:
			'What is the name of the data structure that stores key-value pairs in Python?',
		category: python,
		correct_answer: 'dictionary',
		incorrect_answers: ['list', 'set', 'tuple'],
	},
	{
		id: 9,
		difficulty: 'Hard',
		question:
			'What is the output of this code in Python?\n\ndef foo(x):\n  if x > 0:\n    return x + foo(x-1)\n  else:\n    return 0\n\nprint(foo(3))',
		category: python,
		correct_answer: '6',
		incorrect_answers: ['3', '9', 'RecursionError'],
	},
	{
		id: 10,
		difficulty: 'Hard',
		question:
			'What is the name of the special method that is invoked when an object is created in Python?',
		category: python,
		correct_answer: '__init__',
		incorrect_answers: ['__new__', '__create__', '__start__'],
	},
	{
		id: 11,
		difficulty: 'Hard',
		question:
			'What is the name of the operator that unpacks an iterable into individual elements in Python?',
		category: python,
		correct_answer: '*',
		incorrect_answers: ['&', '#', '@'],
	},
	{
		id: 12,
		difficulty: 'Hard',
		question:
			'What is the name of the decorator that makes a function run only once in Python?',
		category: python,
		correct_answer: '@functools.lru_cache(maxsize=None)',
		incorrect_answers: [
			'@functools.cache',
			'@functools.once',
			'@functools.singleton',
		],
	},

	{
        id: 13,
        difficulty: 'Easy',
        question: 'What is the correct way to declare a variable in JavaScript?',
        category: javascript,
        correct_answer: 'let x = 10;',
        incorrect_answers: [
            'var x = 10;',
            'const x = 10;',
            'x = 10;',
        ],
    },
    {
        id: 14,
        difficulty: 'Easy',
        question: 'What is the correct way to write a comment in JavaScript?',
        category: javascript,
        correct_answer: '// This is a comment',
        incorrect_answers: [
            '<!-- This is a comment -->',
            '/* This is a comment */',
            '# This is a comment',
        ],
    },
    {
        id: 15,
        difficulty: 'Easy',
        question: 'What is the correct way to create an array in JavaScript?',
        category: javascript,
        correct_answer: 'let arr = [1, 2, 3];',
        incorrect_answers: [
            'let arr = 1, 2, 3;',
            'let arr = array(1, 2, 3);',
            'let arr = new Array(1, 2, 3);',
        ],
    },
    {
        id: 16,
        difficulty: 'Easy',
        question: 'What is the correct way to access the first element of an array in JavaScript?',
        category: javascript,
        correct_answer: 'arr[0]',
        incorrect_answers: [
            'arr[1]',
            'arr.first',
            'arr(0)',
        ],
    },
    {
        id: 17,
        difficulty: 'Medium',
        question: 'What is the correct way to define a function in JavaScript?',
        category: javascript,
        correct_answer: 'function foo() {}',
        incorrect_answers: [
            'let foo = function() {}',
            'let foo = () => {}',
            'foo() {}',
        ],
    },
    {
        id: 18,
        difficulty: 'Medium',
        question: 'What is the correct way to call a function with parameters in JavaScript?',
        category: javascript,
        correct_answer: 'foo(1, 2, 3);',
        incorrect_answers: [
            'foo 1, 2, 3;',
            'foo[1, 2, 3];',
            'foo{1, 2, 3};',
        ],
    },
    {
        id: 19,
        difficulty: 'Medium',
        question: 'What is the correct way to use the ternary operator in JavaScript?',
        category: javascript,
        correct_answer: 'let x = condition ? value1 : value2;',
        incorrect_answers: [
            'let x = condition ? value1, value2;',
            'let x = condition ? value1; value2;',
            'let x = condition ? value1 else value2;',
        ],
    },
    {
        id: 20,
        difficulty: 'Medium',
        question: 'What is the correct way to use the switch statement in JavaScript?',
        category: javascript,
        correct_answer: 'switch (expression) { case value1: ... break; case value2: ... break; default: ... break; }',
        incorrect_answers: [
            'switch (expression) { case value1: ... case value2: ... default: ... }',
            'switch (expression) { case value1: then ... break; case value2: then ... break; default: then ... break; }',
            'switch (expression) { case value1 => ... break; case value2 => ... break; default => ... break; }',
        ],
    },
    {
        id: 21,
        difficulty: 'Hard',
        question: 'What is the correct way to use the async/await syntax in JavaScript?',
        category: javascript,
        correct_answer: 'async function foo() { let x = await bar(); }',
        incorrect_answers: [
            'function foo() { let x = await bar(); }',
            'async function foo() { let x = bar(); }',
            'function foo() { let x = bar(); }',
        ],
    },
    {
        id: 22,
        difficulty: 'Hard',
        question: 'What is the correct way to use the spread operator in JavaScript?',
        category: javascript,
        correct_answer: 'let arr = [...arr1, ...arr2];',
        incorrect_answers: [
            'let arr = [arr1..., arr2...];',
            'let arr = [...arr1, arr2];',
            'let arr = [arr1, ...arr2];',
        ],
    },
    {
        id: 23,
        difficulty: 'Hard',
        question: 'What is the correct way to use the destructuring assignment in JavaScript?',
        category: javascript,
        correct_answer: 'let {a, b, c} = obj;',
        incorrect_answers: [
            'let a, b, c = obj;',
            'let obj = {a, b, c};',
            'let [a, b, c] = obj;',
        ],
    },
    {
        id: 24,
        difficulty: 'Hard',
        question: 'What is the correct way to use the template literals in JavaScript?',
        category: javascript,
        correct_answer: 'let str = `Hello ${name}`;',
        incorrect_answers: [
            'let str = "Hello ${name}";',
            'let str = `Hello $name`;',
            'let str = "Hello $name";',
        ],
    },
	{
		id: 25,
		difficulty: 'Easy',
		question:
			'What is the name of the component that renders a user interface in React?',
		category: react,
		correct_answer: 'React.Component',
		incorrect_answers: ['React.Element', 'React.Node', 'React.Fragment'],
	},
	{
		id: 26,
		difficulty: 'Easy',
		question: 'What is the syntax for creating a JSX element in React?',
		category: react,
		correct_answer: '<tagname prop1="value1" prop2="value2">content</tagname>',
		incorrect_answers: [
			'tagname(prop1="value1", prop2="value2", content)',
			'React.createElement(tagname, {prop1: "value1", prop2: "value2"}, content)',
			'new React.Element(tagname, prop1="value1", prop2="value2", content)',
		],
	},
	{
		id: 27,
		difficulty: 'Easy',
		question:
			'What is the name of the method that is invoked before a component is mounted in React?',
		category: react,
		correct_answer: 'componentWillMount',
		incorrect_answers: [
			'componentDidMount',
			'componentWillUpdate',
			'componentDidUpdate',
		],
	},
	{
		id: 28,
		difficulty: 'Easy',
		question:
			'What is the name of the attribute that is used to pass data from a parent component to a child component in React?',
		category: react,
		correct_answer: 'props',
		incorrect_answers: ['state', 'context', 'refs'],
	},
	{
		id: 29,
		difficulty: 'Medium',
		question:
			'What is the name of the library that provides state management for React applications?',
		category: react,
		correct_answer: 'Redux',
		incorrect_answers: ['Flux', 'MobX', 'React Hooks'],
	},
	{
		id: 30,
		difficulty: 'Medium',
		question:
			'What is the name of the hook that is used to perform side effects in React functional components?',
		category: react,
		correct_answer: 'useEffect',
		incorrect_answers: ['useState', 'useRef', 'useCallback'],
	},
	{
		id: 31,
		difficulty: 'Medium',
		question:
			'What is the name of the tool that is used to transpile JSX code into plain JavaScript?',
		category: react,
		correct_answer: 'Babel',
		incorrect_answers: ['Webpack', 'Gulp', 'Grunt'],
	},
	{
		id: 32,
		difficulty: 'Medium',
		question:
			'What is the name of the higher-order component that is used to connect a React component to the Redux store?',
		category: react,
		correct_answer: 'connect',
		incorrect_answers: ['mapStateToProps', 'mapDispatchToProps', 'Provider'],
	},
	{
		id: 33,
		difficulty: 'Hard',
		question:
			'What is the name of the concept that allows a component to render multiple elements without a wrapper element in React?',
		category: react,
		correct_answer: 'Fragments',
		incorrect_answers: ['Portals', 'Suspense', 'Memo'],
	},
	{
		id: 34,
		difficulty: 'Hard',
		question:
			'What is the name of the feature that allows a component to pause the rendering and wait for some condition to be met in React?',
		category: react,
		correct_answer: 'Suspense',
		incorrect_answers: ['Lazy', 'ErrorBoundary', 'Fallback'],
	},
	{
		id: 35,
		difficulty: 'Hard',
		question:
			'What is the name of the API that allows a component to access the data from the closest parent provider in React?',
		category: react,
		correct_answer: 'Context',
		incorrect_answers: ['Consumer', 'PropType', 'Children'],
	},
	{
		id: 36,
		difficulty: 'Hard',
		question:
			'What is the name of the function that is used to create a custom hook in React?',
		category: react,
		correct_answer: 'Any function that starts with "use"',
		incorrect_answers: [
			'Any function that ends with "Hook"',
			'Any function that takes "hook" as a parameter',
			'Any function that returns an array',
		],
	},

	{
		id: 37,
		difficulty: 'Easy',
		question:
			'What is the command to create a new Next.js app using create-next-app?',
		category: nextjs,
		correct_answer: 'npx create-next-app@latest',
		incorrect_answers: [
			'npm install next@latest',
			'npx next init',
			'npm create-next-app@latest',
		],
	},
	{
		id: 38,
		difficulty: 'Easy',
		question:
			'What is the name of the folder that contains the pages of your Next.js app?',
		category: nextjs,
		correct_answer: 'pages',
		incorrect_answers: ['src', 'app', 'components'],
	},
	{
		id: 39,
		difficulty: 'Easy',
		question:
			'What is the name of the file that contains the global styles for your Next.js app?',
		category: nextjs,
		correct_answer: 'styles.css',
		incorrect_answers: ['global.css', 'app.css', 'index.css'],
	},
	{
		id: 40,
		difficulty: 'Easy',
		question:
			'What is the name of the prop that passes the initial data from getStaticProps to your page component?',
		category: nextjs,
		correct_answer: 'props',
		incorrect_answers: ['data', 'initialProps', 'staticProps'],
	},
	{
		id: 41,
		difficulty: 'Medium',
		question:
			'What is the name of the hook that lets you access the router object in your Next.js app?',
		category: nextjs,
		correct_answer: 'useRouter',
		incorrect_answers: ['useRoute', 'useNavigation', 'useNextRouter'],
	},
	{
		id: 42,
		difficulty: 'Medium',
		question:
			'What is the name of the function that lets you fetch data at request time instead of build time?',
		category: nextjs,
		correct_answer: 'getServerSideProps',
		incorrect_answers: ['getInitialProps', 'getStaticProps', 'getServerProps'],
	},
	{
		id: 43,
		difficulty: 'Medium',
		question:
			'What is the name of the component that lets you dynamically import other components with code splitting and lazy loading?',
		category: nextjs,
		correct_answer: 'dynamic',
		incorrect_answers: ['import', 'loadable', 'async'],
	},
	{
		id: 44,
		difficulty: 'Medium',
		question:
			'What is the name of the folder that contains the API routes of your Next.js app?',
		category: nextjs,
		correct_answer: 'api',
		incorrect_answers: ['routes', 'functions', 'server'],
	},
	{
		id: 45,
		difficulty: 'Hard',
		question:
			"What is the name of the feature that allows you to use React's latest features such as Server Components and Streaming in your Next.js app?",
		category: nextjs,
		correct_answer: 'App Router',
		incorrect_answers: ['Pages Router', 'Next Router', 'React Router'],
	},
	{
		id: 46,
		difficulty: 'Hard',
		question:
			'What is the name of the prop that passes the query parameters from the URL to your page component?',
		category: nextjs,
		correct_answer: 'query',
		incorrect_answers: ['params', 'args', 'search'],
	},
	{
		id: 47,
		difficulty: 'Hard',
		question:
			'What is the name of the component that lets you optimize images for faster loading and better user experience in your Next.js app?',
		category: nextjs,
		correct_answer: 'Image',
		incorrect_answers: ['Picture', 'Photo', 'Img'],
	},
	{
		id: 48,
		difficulty: 'Hard',
		question:
			'What is the name of the feature that allows you to use custom domains for your Next.js app deployed on Vercel?',
		category: nextjs,
		correct_answer: 'Custom Domains',
		incorrect_answers: ['Domain Mapping', 'Domain Aliases', 'Domain Redirects'],
	},
    {
		id: 49,
		difficulty: 'Easy',
		question: 'What does HTML stand for?',
		category: html,
		correct_answer: 'HyperText Markup Language',
		incorrect_answers: [
			'HyperText Machine Language',
			'HyperText Markup Link',
			'HyperText Markup List',
		],
	},
	{
		id: 50,
		difficulty: 'Easy',
		question: 'What is the name of the tag that defines the title of a web page?',
		category: html,
		correct_answer: '<title>',
		incorrect_answers: [
			'<head>',
			'<meta>',
			'<h1>',
		],
	},
	{
		id: 51,
		difficulty: 'Easy',
		question: 'What is the name of the attribute that specifies the URL of an image in HTML?',
		category: html,
		correct_answer: 'src',
		incorrect_answers: [
			'href',
			'alt',
			'source',
		],
	},
	{
		id: 52,
		difficulty: 'Easy',
		question: 'What is the name of the tag that creates a hyperlink in HTML?',
		category: html,
		correct_answer: '<a>',
		incorrect_answers: [
			'<link>',
			'<href>',
			'<url>',
		],
	},
	{
		id: 53,
		difficulty: 'Medium',
		question: 'What is the name of the tag that defines a table in HTML?',
		category: html,
		correct_answer: '<table>',
		incorrect_answers: [
			'<tr>',
			'<td>',
			'<th>',
		],
	},
	{
		id: 54,
		difficulty: 'Medium',
		question: 'What is the name of the tag that defines a list item in HTML?',
		category: html,
		correct_answer: '<li>',
		incorrect_answers: [
			'<ul>',
			'<ol>',
			'<item>',
		],
	},
	{
		id: 55,
		difficulty: 'Medium',
		question: 'What is the name of the tag that defines a comment in HTML?',
		category: html,
		correct_answer: '<!-- -->',
		incorrect_answers: [
			'//',
			'/* */',
			'<comment>',
		],
	},
	{
		id: 56,
		difficulty: 'Medium',
		question: 'What is the name of the tag that defines a form in HTML?',
		category: html,
		correct_answer: '<form>',
		incorrect_answers: [
			'<input>',
			'<label>',
			'<field>',
		],
	},
	{
		id: 57,
		difficulty: 'Hard',
		question: 'What is the name of the attribute that specifies the character encoding of a web page in HTML?',
		category: html,
		correct_answer: 'charset',
		incorrect_answers: [
			'encoding',
			'lang',
			'code',
		],
	},
	{
		id: 58,
		difficulty: 'Hard',
		question: 'What is the name of the tag that defines a section of text that has been deleted from a document in HTML?',
		category: html,
		correct_answer: '<del>',
		incorrect_answers: [
			'<strike>',
			'<remove>',
			'<cut>',
		],
	},
	{
		id: 59,
		difficulty: 'Hard',
		question: 'What is the name of the tag that defines a section of text that has been inserted into a document in HTML?',
		category: html,
		correct_answer: '<ins>',
		incorrect_answers: [
			'<add>',
			'<append>',
			'<paste>',
		],
	},
	{
		id: 60,
		difficulty: 'Hard',
		question: 'What is the name of the tag that defines a section of text that is marked or highlighted for reference or notation in HTML?',
		category: html,
		correct_answer: '<mark>',
		incorrect_answers: [
			'<highlight>',
			'<em>',
			'<strong>',
		],
	},
    {
        id: 61,
        difficulty: 'Easy',
        question: 'What does CSS stand for?',
        category: css,
        correct_answer: 'Cascading Style Sheets',
        incorrect_answers: [
            'Creative Style Sheets',
            'Colorful Style Sheets',
            'Computer Style Sheets',
        ],
    },
    {
        id: 62,
        difficulty: 'Easy',
        question: 'Which HTML attribute is used to link a CSS file?',
        category: css,
        correct_answer: 'href',
        incorrect_answers: [
            'src',
            'rel',
            'type',
        ],
    },
    {
        id: 63,
        difficulty: 'Easy',
        question: 'Which CSS property is used to change the text color of an element?',
        category: css,
        correct_answer: 'color',
        incorrect_answers: [
            'font-color',
            'text-color',
            'fg-color',
        ],
    },
    {
        id: 64,
        difficulty: 'Easy',
        question: 'Which CSS property is used to change the background color of an element?',
        category: css,
        correct_answer: 'background-color',
        incorrect_answers: [
            'color',
            'bg-color',
            'fill-color',
        ],
    },
    {
        id: 65,
        difficulty: 'Medium',
        question: 'How do you select an element with id "demo" in CSS?',
        category: css,
        correct_answer: '#demo',
        incorrect_answers: [
            '.demo',
            'demo',
            '*demo',
        ],
    },
    {
        id: 66,
        difficulty: 'Medium',
        question: 'How do you select elements with class name "test" in CSS?',
        category: css,
        correct_answer: '.test',
        incorrect_answers: [
            '#test',
            'test',
            '*test',
        ],
    },
    {
        id: 67,
        difficulty: 'Medium',
        question: 'How do you insert a comment in a CSS file?',
        category: css,
        correct_answer: '/* this is a comment */',
        incorrect_answers: [
            '// this is a comment',
            '<!-- this is a comment -->',
            '# this is a comment',
        ],
    },
    {
        id: 68,
        difficulty: 'Medium',
        question: 'Which CSS property is used to add a border around an element?',
        category: css,
        correct_answer: 'border',
        incorrect_answers: [
            'margin',
            'outline',
            'padding',
        ],
    },
    {
        id: 69,
        difficulty: 'Hard',
        question: 'How do you make the text bold in CSS?',
        category: css,
        correct_answer: 'font-weight: bold;',
        incorrect_answers: [
            'text-style: bold;',
            'font-size: bold;',
            'font: bold;',
        ],
    },
    {
        id: 70,
        difficulty: 'Hard',
        question: 'How do you create a custom CSS variable?',
        category: css,
        correct_answer: '--variable-name: value;',
        incorrect_answers: [
            '$variable-name: value;',
            'var variable-name = value;',
            'variable-name: value;',
        ],
    },
    {
        id: 71,
        difficulty: 'Hard',
        question: 'How do you use a custom CSS variable in a declaration?',
        category: css,
        correct_answer: 'var(--variable-name)',
        incorrect_answers: [
            '$variable-name',
            '--variable-name',
            'variable-name',
        ],
    },
    {
        id: 72,
        difficulty: 'Hard',
        question: 'How do you make a list of items display horizontally in CSS?',
        category: css,
        correct_answer: 'list-style-type: none; display: inline;',
        incorrect_answers: [
            'list-style-position: inside; display: block;',
            'list-style-type: circle; display: flex;',
            'list-style-position: outside; display: grid;',
        ],
    },

    {
        id: 73,
        difficulty: 'Easy',
        question: 'What is the file extension for typescript files?',
        category: typescript,
        correct_answer: '.ts',
        incorrect_answers: [
            '.js',
            '.tsx',
            '.tsc',
        ],
    },
    {
        id: 74,
        difficulty: 'Easy',
        question: 'What is the keyword to declare a variable in typescript?',
        category: typescript,
        correct_answer: 'let',
        incorrect_answers: [
            'var',
            'const',
            'def',
        ],
    },
    {
        id: 75,
        difficulty: 'Easy',
        question: 'What is the symbol to denote the type of a variable in typescript?',
        category: typescript,
        correct_answer: ':',
        incorrect_answers: [
            '=',
            '::',
            '->',
        ],
    },
    {
        id: 76,
        difficulty: 'Easy',
        question: 'What is the syntax to define an interface in typescript?',
        category: typescript,
        correct_answer: 'interface Name {...}',
        incorrect_answers: [
            'interface = {...}',
            'interface(Name) {...}',
            'define interface Name {...}',
        ],
    },
    {
        id: 77,
        difficulty: 'Medium',
        question: 'What is the difference between a class and an interface in typescript?',
        category: typescript,
        correct_answer: 'A class can have implementation details, but an interface only defines the shape of an object',
        incorrect_answers: [
            'A class can only have one instance, but an interface can have many instances',
            'A class can inherit from multiple interfaces, but an interface can only inherit from one class',
            'A class and an interface are the same thing in typescript',
        ],
    },
    {
        id: 78,
        difficulty: 'Medium',
        question: 'What is the keyword to mark a parameter or a property as optional in typescript?',
        category: typescript,
        correct_answer: '?',
        incorrect_answers: [
            '!',
            '*',
            'opt',
        ],
    },
    {
        id: 79,
        difficulty: 'Medium',
        question: 'What is the keyword to specify the return type of a function in typescript?',
        category: typescript,
        correct_answer: '=>',
        incorrect_answers: [
            'returns',
            '<-',
            ':',
        ],
    },
    {
        id: 80,
        difficulty: 'Medium',
        question: 'What is the syntax to create a generic type in typescript?',
        category: typescript,
        correct_answer: '<T>',
        incorrect_answers: [
            '[T]',
            '(T)',
            '{T}',
        ],
    },
    {
        id: 81,
        difficulty: 'Hard',
        question: 'What is the difference between the keywords "type" and "interface" in typescript?',
        category: typescript,
        correct_answer: 'A type can represent primitive, union, and intersection types, but an interface can only represent object types',
        incorrect_answers: [
            'A type can only represent object types, but an interface can represent primitive, union, and intersection types',
            'A type can be dynamically changed, but an interface is static',
            'A type and an interface are the same thing in typescript',
        ],
    },
    {
        id: 82,
        difficulty: 'Hard',
        question: 'What is the difference between the operators "as" and "<>" in typescript?',
        category: typescript,
        correct_answer: '"as" is used for type assertions, and "<>" is used for type parameters',
        incorrect_answers: [
            '"as" is used for type parameters, and "<>" is used for type assertions',
            '"as" and "<>" are the same thing in typescript',
            '"as" and "<>" are not valid operators in typescript',
        ],
    },
    {
        id: 83,
        difficulty: 'Hard',
        question: 'What is the difference between the types "any" and "unknown" in typescript?',
        category: typescript,
        correct_answer: '"any" can be assigned to any variable and any property can be accessed on it, but "unknown" can only be assigned to unknown or any variables and no property can be accessed on it without type assertion',
        incorrect_answers: [
            '"any" and "unknown" are the same thing in typescript',
            '"any" can only be assigned to any variables and no property can be accessed on it without type assertion, but "unknown" can be assigned to any variable and any property can be accessed on it',
            '"any" can be assigned to any variable and any property can be accessed on it, but "unknown" cannot be assigned to any variable and no property can be accessed on it',
        ],
    },
    {
        id: 84,
        difficulty: 'Hard',
        question: 'What is the difference between the types "never" and "void" in typescript?',
        category: typescript,
        correct_answer: '"never" represents a value that never occurs, and "void" represents the absence of a value',
        incorrect_answers: [
            '"never" and "void" are the same thing in typescript',
            '"never" represents the absence of a value, and "void" represents a value that never occurs',
            '"never" represents a function that never returns, and "void" represents a function that returns nothing',
        ],
    },
];
