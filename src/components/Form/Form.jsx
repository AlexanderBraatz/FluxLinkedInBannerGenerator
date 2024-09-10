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

import InputForm from '../InputForm/InputForm.jsx';
import Circles from '../Circles/Circles.jsx';
import GeneratedBanner from '../GeneratedBanner/GeneratedBanner.jsx';
import LinkBox from '../LinkBox/LinkBox.jsx';
import Examples from '../Examples/Examples.jsx';

//pretending streets is form api call
import Streets from './../../assets/images/Streets.png';

export default function Form(props) {
	//track input field
	const [description, setDescription] = useState('');
	const [bannerImage, setBannerImage] = useState(Streets);

	function handleTextareaChange(e) {
		setDescription(e.target.value);
	}

	const handleSubmit = e => {
		e.preventDefault();
		console.log('form has been submitted!');
	};
	return (
		<>
			<InputForm
				description={description}
				handleTextareaChange={e => handleTextareaChange(e)}
			/>
			<Circles isLoading={false} />
			<GeneratedBanner bannerImage={bannerImage} />
			<Circles isLoading={false} />
			<LinkBox isLoading={false} />
			<Examples isLoading={false} />
		</>
	);
}
