import styled from 'styled-components';
import React from 'react';

export default function Form(props) {
	const handleSubmit = e => {
		e.preventDefault();
		console.log('form has been submitted!');
	};
	return (
		<StyledForm onSubmit={handleSubmit}>
			<Heading>Bitte gib deine Bildbeschreibung ein :</Heading>
			<Textarea
				defaultValue={
					'Eine Luftaufnahme einer belebten Autobahnkreuzung im Herbst. Die Bäume entlang der Straßen sind in warmen Gelb-, Orange- und Rottönen gefärbt. Auf der linken Seite des Bildes, am Rande der Kreuzung, fährt ein einzelnes rotes Auto. Das leuchtend rote Fahrzeug sticht zwischen den anderen Verkehrsteilnehmern hervor und verleiht der herbstlichen Szene einen besonderen Kontrast. Die Straßen sind voller Autos, die sich in verschiedene Richtungen bewegen, während die Struktur der Kreuzung mit ihren Brücken und Abzweigungen klar erkennbar ist.'
				}
			></Textarea>
			<ButtonContainer>
				<Button type="submit">
					<Label>Bild generieren</Label>
				</Button>
			</ButtonContainer>
		</StyledForm>
	);
}

const StyledForm = styled.form`
	width: 71.1rem;
	margin: auto;
	/* height: 59.3rem; */
	display: flex;
	justify-content: left;
	align-items: top;
	flex-direction: column;
	padding-top: 1rem;
`;

const Heading = styled.h2`
	font-size: 32px;
	font-weight: 600;
	color: ${props => props.theme.desktop.purple_dark};
	height: 4.2rem;
	margin-top: 6.1rem;
	letter-spacing: -0.5px;
`;
const Textarea = styled.textarea`
	margin-top: 3rem;
	height: 28rem;
	background-color: ${props => props.theme.desktop.purple_light};
	border-radius: 10px;
	padding: 2rem;
	padding-top: 2.2rem;
	border: none;
	color: ${props => props.theme.desktop.purple_dark};
	resize: none;

	font-family: 'Inconsolata';
	font-size: 1.6rem;
	line-height: 2.2rem;
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: right;
	align-items: center;
	padding-top: 1rem;
`;

const Button = styled.button`
	background-color: ${props => props.theme.desktop.white};
	color: ${props => props.theme.desktop.purple_dark};
	padding: 6px 20px;
	border: 2px solid ${props => props.theme.desktop.purple_dark};
	border-radius: 100px;
	cursor: pointer;
	font-size: 16px;

	&:hover {
		background-color: ${props => props.theme.desktop.purple_medium};
		color: ${props => props.theme.desktop.white};
	}

	&:active {
		background-color: ${props => props.theme.desktop.purple_light};
	}
`;

const Label = styled.span`
	font-weight: medium;
	font-size: 16px;
	line-height: 2.2rem;
`;
