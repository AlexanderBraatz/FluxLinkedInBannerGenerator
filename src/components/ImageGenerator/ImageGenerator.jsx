import React, { useState } from 'react';

const ImageGenerator = () => {
	const [inputText, setInputText] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [loading, setLoading] = useState(false);

	const generateImage = async () => {
		setLoading(true);

		try {
			const response = await fetch('https://api.replicate.com/v1/predictions', {
				method: 'POST',
				headers: {
					Authorization: 'Bearer YOUR_API_KEY',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					version: 'your-model-version-id', // replace with actual version
					input: { prompt: inputText }
				})
			});

			const data = await response.json();

			// Polling until the prediction is completed
			let prediction = data;
			while (
				prediction.status !== 'succeeded' &&
				prediction.status !== 'failed'
			) {
				await new Promise(r => setTimeout(r, 1000));
				const predictionResponse = await fetch(
					`https://api.replicate.com/v1/predictions/${data.id}`,
					{
						headers: {
							Authorization: 'Bearer YOUR_API_KEY'
						}
					}
				);
				prediction = await predictionResponse.json();
			}

			if (prediction.status === 'succeeded') {
				setImageUrl(prediction.output[0]);
			} else {
				alert('Image generation failed');
			}
		} catch (error) {
			console.error('Error generating image:', error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div>
			<h1>Text to Image Generator</h1>
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
			)}
		</div>
	);
};

export default ImageGenerator;
