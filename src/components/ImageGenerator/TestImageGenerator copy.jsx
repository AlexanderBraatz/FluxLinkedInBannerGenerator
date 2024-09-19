import React, { useState, useEffect, useRef } from 'react';

// copyed at error500 response but i think i had 204 for a bit

const ImageGenerator = () => {
	const [inputText, setInputText] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [loading, setLoading] = useState(false);

	const apiToken = import.meta.env.VITE_REPLICATE_API_TOKEN;
	const apiTokendummy = '';

	const BASE_URL = 'https://jsonplaceholder.typicode.com';

	const [isLoading, setIsLoading] = useState(false);
	const [posts, setPosts] = useState([]);
	const [error, setError] = useState();

	// useEffect(() => {
	// 	const fetchPosts = async () => {
	// 		setIsLoading(true);
	// 		try {
	// 			const response = await fetch(`${BASE_URL}/posts`);
	// 			const posts = await response.json();
	// 			setPosts(posts);
	// 		} catch (e) {
	// 			setError(e);
	// 		} finally {
	// 			setIsLoading(false);
	// 		}
	// 	};
	// 	fetchPosts();
	// }, []);

	useEffect(() => {
		const fetchPosts = async () => {
			setIsLoading(true);
			try {
				const response = await fetch('http://localhost:5005/api/predict', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						version:
							'8dab33aa91741c2c07274f97d926b0606b6c38416a8a83fdc8f336512cdd88cf', // replace with actual version
						input: { prompt: inputText }
					})
				});
				const data = await response.json();
				console.log(data);
				setPosts(posts);
			} catch (e) {
				setError(e);
			} finally {
				setIsLoading(false);
			}
		};
		fetchPosts();
	}, []);

	if (isLoading) {
		return <div>IsLoading xxxxxxxxxxoxoxoxoxoxoxoxoxoxoxox</div>;
	}
	if (error) {
		return <div>Is Error Wwwwywwywywywywyywywywywyywywyw</div>;
	}

	const generateImage = async () => {
		setLoading(true);

		// try {
		// 	console.log('tryed to post');
		// 	const response = await fetch('https://api.replicate.com/v1/predictions', {
		// 		method: 'POST',
		// 		headers: {
		// 			Authorization: `Bearer ${apiTokendummy}`,
		// 			'Content-Type': 'application/json'
		// 		},
		// 		body: JSON.stringify({
		// 			version: 'your-model-version-id', // replace with actual version
		// 			input: { prompt: inputText }
		// 		})
		// 	});

		// 	const data = await response.json();

		// 	// Polling until the prediction is completed
		// 	let prediction = data;
		// 	while (
		// 		prediction.status !== 'succeeded' &&
		// 		prediction.status !== 'failed'
		// 	) {
		// 		await new Promise(r => setTimeout(r, 1000));
		// 		const predictionResponse = await fetch(
		// 			`https://api.replicate.com/v1/predictions/${data.id}`,
		// 			{
		// 				headers: {
		// 					Authorization: `Bearer ${apiTokendummy}`
		// 				}
		// 			}
		// 		);
		// 		prediction = await predictionResponse.json();
		// 	}

		// 	if (prediction.status === 'succeeded') {
		// 		setImageUrl(prediction.output[0]);
		// 	} else {
		// 		alert('Image generation failed');
		// 	}
		// } catch (error) {
		// 	console.error('Error generating image:', error);
		// } finally {
		// 	setLoading(false);
		// }
	};

	return (
		<div>
			im heeere
			<ul>
				{posts.map(post => {
					return <li key={post.id}>{post.title}</li>;
				})}
			</ul>
			{/* <h1>Text to Image Generator</h1>
			<input
				type="text"
				value={inputText}
				onChange={e => setInputText(e.target.value)}
				placeholder="Enter text"
			/>
			<button
				onClick={generateImage}
				disabled={loading}
			>
				{loading ? 'Generating...' : 'Generate Image'}
			</button>

			{imageUrl && (
				<img
					src={imageUrl}
					alt="Generated"
					style={{ marginTop: '20px', maxWidth: '500px' }}
				/>
			)} */}
		</div>
	);
};

export default ImageGenerator;
