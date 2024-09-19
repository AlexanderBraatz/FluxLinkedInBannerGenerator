import React, { useState } from 'react';
import axios from 'axios';

const ImageGenerator = () => {
	const [prompt, setPrompt] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [error, setError] = useState('');

	const handleGenerate = async () => {
		try {
			const response = await axios.get('http://127.0.0.1:5000/generate', {
				params: {
					prompt: prompt
				}
			});
			setImageUrl(response.data.image_url); // Extract image URL from the response
			setError(''); // Clear any previous errors
		} catch (err) {
			console.error(err);
			setError('Error generating image, please try again.');
		}
	};

	return (
		<div>
			<h1>Generate an Image</h1>
			<input
				type="text"
				value={prompt}
				onChange={e => setPrompt(e.target.value)}
				placeholder="Enter your prompt"
			/>
			<button onClick={handleGenerate}>Generate Image</button>

			{error && <p style={{ color: 'red' }}>{error}</p>}
			{imageUrl && (
				<div>
					<h3>Generated Image:</h3>
					<img
						src={imageUrl}
						alt="Generated result"
					/>
				</div>
			)}
		</div>
	);
};

export default ImageGenerator;
