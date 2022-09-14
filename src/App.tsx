import { FormEvent, useState } from 'react';
import data from './data';

function App() {
	const [count, setCount] = useState(1);
	const [text, setText] = useState([] as string[]);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		let amount = count.toString();
		setText(data.slice(0, +amount));
	};

	return (
		<section className='section-center'>
			<h3>tired of boring lorem ipsum?</h3>
			<form className='lorem-form' onSubmit={handleSubmit}>
				<label htmlFor='amount'>paragraphs:</label>
				<input
					min='1'
					max='8'
					type='number'
					name='amount'
					id='amount'
					value={count}
					onChange={(e) => setCount(+e.target.value)}
				/>
				<button className='btn'>generate</button>
			</form>
			<article className='lorem-text'>
				{text.map((item, index) => {
					return <p key={index}>{item}</p>;
				})}
			</article>
		</section>
	);
}

export default App;
