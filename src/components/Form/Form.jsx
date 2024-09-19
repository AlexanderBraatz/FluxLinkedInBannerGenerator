//make api request to flux if submitted
//hide sections before submittion
//animate circles on loading
//display image
// api call to generate qr code
// display qr code
//display link
// update input field if example is selected

import styled from 'styled-components';
import React, { useState } from 'react';
import axios from 'axios';

import InputForm from '../InputForm/InputForm.jsx';
import Circles from '../Circles/Circles.jsx';
import GeneratedBanner from '../GeneratedBanner/GeneratedBanner.jsx';
import LinkBox from '../LinkBox/LinkBox.jsx';
import Examples from '../Examples/Examples.jsx';

//pretending streets is form api call
import Streets from './../../assets/images/Streets.png';
import Grey2BannerBackground from './../../assets/images/Grey2BannerBackground.png';
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory.js';

export default function Form(props) {
	//track input field
	const [description, setDescription] = useState('');
	const [bannerImageURL, setBannerImageURL] = useState(Grey2BannerBackground);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState();

	function handleTextareaChange(e) {
		setDescription(e.target.value);
	}
	function handleExampleSelection(example) {
		setDescription(example);
		console.log('handleExampleSelection in Form', example);
	}

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			setIsLoading(true);
			setBannerImageURL(Grey2BannerBackground);
			const response = await axios.get(
				`http://localhost:5000/generate?prompt=${description}`
			);
			setBannerImageURL(response.data.image_url[0]); // Extract image URL from the response
			setError(''); // Clear any previous errors
		} catch (err) {
			console.error(err);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<InputForm
				description={description}
				handleTextareaChange={e => handleTextareaChange(e)}
				handleSubmit={e => handleSubmit(e)}
			/>
			<Circles
				offSet={0}
				isLoading={isLoading}
			/>
			<GeneratedBanner bannerImageURL={bannerImageURL} />
			<Circles
				offSet={3}
				isLoading={isLoading}
			/>
			<LinkBox
				bannerImageURL={bannerImageURL}
				isLoading={isLoading}
			/>
			<Examples
				isLoading={isLoading}
				handleExampleSelection={handleExampleSelection}
			/>
		</>
	);
}
