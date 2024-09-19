const generateImage = async () => {
	const response = await fetch('http://localhost:5000/api/predict', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			version: 'your-model-version-id',
			input: { prompt: inputText }
		})
	});
	const data = await response.json();
	console.log(data);
};
