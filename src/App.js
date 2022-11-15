import { useState, useEffect } from "react";

function App() {
	const [number, setNumber] = useState(0);
	const [name, setName] = useState("Birsen");

	// Herhangi bir ifade güncellendiği anda bununla yakalarız
	useEffect(() => {
		console.log("Number State Güncellendi");
	}, [number]);
	useEffect(() => {
		console.log("Name State Güncellendi");
	}, [name]);

	useEffect(() => {
		console.log("Component mount edildi");
	}, []);

	return (
		<div className="App">
			<h1>{number}</h1>
			<button onClick={() => setNumber(number + 1)}>Click</button>
			<hr />
			<h1>{name}</h1>
			<button onClick={() => setName("Mete")}>Click</button>
		</div>
	);
}

export default App;
