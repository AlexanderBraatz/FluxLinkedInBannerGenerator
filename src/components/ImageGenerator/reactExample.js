import React, { useState } from 'react';

function CreatePostForm() {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [successMessage, setSuccessMessage] = useState(null);

	const handleSubmit = async e => {
		e.preventDefault();

		try {
			const response = await fetch('https://example.com/api/posts', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ title, body })
			});

			if (!response.ok) {
				throw new Error('Failed to create post');
			}

			setSuccessMessage('Post created successfully');
			setTitle('');
			setBody('');
		} catch (error) {
			console.error('Error:', error);
		}
	};

	return (
		<div>
			<h1>Create Post</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="title">Title:</label>
					<input
						type="text"
						id="title"
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="body">Body:</label>
					<textarea
						id="body"
						value={body}
						onChange={e => setBody(e.target.value)}
					/>
				</div>
				<button type="submit">Create Post</button>
				{successMessage && <p>{successMessage}</p>}
			</form>
		</div>
	);
}

export default CreatePostForm;
