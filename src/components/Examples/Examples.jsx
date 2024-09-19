import styled from 'styled-components';
import React from 'react';
import Example from './Example.jsx';

//images
import Banner_speaker from './../../assets/images/Banner_speaker.png';
import Banner_abstract from './../../assets/images/Banner_abstract.png';
import Banner_Trainer from './../../assets/images/Banner_Trainer.png';
import Banner_Leadership from './../../assets/images/Banner_Leadership.png';
import Curly_speaker from './../../assets/images/Curly_speaker.png';
let examplesData = [
	{
		image: Banner_speaker,
		description:
			'Banner Style: Professional event imagery, with bold typography announcing upcoming speaking engagements. Text: “Speaker | Upcoming at XYZ Conference 2024” Approach: This banner showcases professional credibility by highlighting participation in major events, perfect for building authority as a thought leader'
	},
	{
		image: Banner_Trainer,
		description:
			'Banner Style: An energetic image with action shots of people exercising, vibrant colors, and motivational phrases in the center right of the banner. Text: “Transforming Lives” Approach: The banner uses action photography and motivating text to convey energy and commitment, appealing to health-conscious professionals'
	},
	{
		image: Banner_Leadership,
		description:
			'Banner Style: A calm, scenic background with soft colors, featuring a motivational quote in elegant typography. Text: “Leadership is about making others better” Approach: This type of banner works for professionals looking to promote a positive, leadership-focused brand, combining calm visuals with inspirational messaging'
	},
	{
		image: Curly_speaker,
		description:
			'Banner Style: Professional event imagery. the picture is taken over the shoulder of the speaker looking out into the crowed of people who are paying close attention to the speaker on stage. its a female speaker with brown curly hair. the picture is taken from far away on a hd camera taken by a professional photographer.'
	}
	// {
	// 	image: Banner_abstract,
	// 	description:
	// 		'Banner Style: Abstract geometric shapes in a monochromatic color scheme, with no text but a clean, polished look. Approach: This design takes a minimalist approach, relying on abstract design to create a modern, professional appearance without crowding the space '
	// }
];

export default function Examples({ handleExampleSelection }) {
	return (
		<Container>
			{examplesData.map((exampleData, i) => (
				<Example
					data={exampleData}
					handleExampleSelection={handleExampleSelection}
					key={i}
				/>
			))}
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	column-gap: 2rem;
	row-gap: 2rem;
	max-width: 950px;
	margin: 0 auto;
`;
