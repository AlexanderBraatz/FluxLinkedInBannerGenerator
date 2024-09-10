import styled from 'styled-components';
import React from 'react';
import Example from './Example.jsx';

//images
import Pasta from './../../assets/images/Pasta.png';
let examplesData = [
	{
		image: Pasta,
		description:
			'Vor einem tiefblauen Hintergrund sind farbige Schmetterlingsnudeln symmetrisch in einem präzisen Muster angeordnet. Die Pasta schimmert leicht im Licht, und ihre einzigartige Form erinnert an zarte Schmetterlinge. Die harmonische Anordnung und der Kontrast zum satten Blau des Hintergrunds erzeugen eine visuell ansprechende Komposition.'
	},
	{
		image: Pasta,
		description:
			'Vor einem tiefblauen Hintergrund sind farbige Schmetterlingsnudeln symmetrisch in einem präzisen Muster angeordnet. Die Pasta schimmert leicht im Licht, und ihre einzigartige Form erinnert an zarte Schmetterlinge. Die harmonische Anordnung und der Kontrast zum satten Blau des Hintergrunds erzeugen eine visuell ansprechende Komposition.'
	},
	{
		image: Pasta,
		description:
			'Vor einem tiefblauen Hintergrund sind farbige Schmetterlingsnudeln symmetrisch in einem präzisen Muster angeordnet. Die Pasta schimmert leicht im Licht, und ihre einzigartige Form erinnert an zarte Schmetterlinge. Die harmonische Anordnung und der Kontrast zum satten Blau des Hintergrunds erzeugen eine visuell ansprechende Komposition.'
	},
	{
		image: Pasta,
		description:
			'Vor einem tiefblauen Hintergrund sind farbige Schmetterlingsnudeln symmetrisch in einem präzisen Muster angeordnet. Die Pasta schimmert leicht im Licht, und ihre einzigartige Form erinnert an zarte Schmetterlinge. Die harmonische Anordnung und der Kontrast zum satten Blau des Hintergrunds erzeugen eine visuell ansprechende Komposition.'
	}
];

export default function Examples(props) {
	return (
		<Container>
			{examplesData.map((exampleData, i) => (
				<Example
					data={exampleData}
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
