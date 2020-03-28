import React, { useState } from 'react';
import Header from './Header';

function App() {
	const [counter, setCounter] = useState(0);

	function handleIncrement() {
		setCounter(counter + 1);
	}

	return (
		<div>
			<Header title='Semana Omnistack'>Counter: {counter}</Header>
			<button onClick={handleIncrement}>Incrementa</button>
		</div>
	);
}

export default App;
