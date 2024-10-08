import styled from 'styled-components';
import React from 'react';

export default function InputForm({
	handleTextareaChange,
	description,
	handleSubmit
}) {
	return (
		<StyledForm onSubmit={handleSubmit}>
			<Heading>Bitte gib deine Bildbeschreibung ein :</Heading>
			<Textarea
				onChange={handleTextareaChange}
				value={description}
				placeholder="Beschreiben Sie Ihr Bild detailliert…"
			></Textarea>
			<ButtonContainer>
				<Button
					type="submit"
					onClick={handleSubmit}
				>
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
	&::placeholder {
		color: ${props => props.theme.desktop.purple_medium};
	}
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
