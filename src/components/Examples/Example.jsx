import styled from 'styled-components';
import React from 'react';

export default function Examples({ data }) {
	return (
		<Container>
			<ImageContainer>
				<Image src={data.image} />
			</ImageContainer>
			<BodyContainer>
				<Heading>Beschreibung:</Heading>
				<Paragraph>{data.description}</Paragraph>
				<ButtonContainer>
					<Button type="action">
						<Label>Beispiel übernehmen</Label>
					</Button>
				</ButtonContainer>
			</BodyContainer>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${props => props.theme.desktop.purple_light};
	border-radius: 1rem;
	width: 46.4rem;
`;

const ImageContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const Image = styled.img`
	max-width: 100%;
	height: auto;
`;

const BodyContainer = styled.div`
	width: 100%;
	text-align: left;
	padding: 2rem;
	border-top: 1px solid ${props => props.theme.desktop.purple_medium};
	border-left: 2px solid ${props => props.theme.desktop.purple_medium};
	border-right: 2px solid ${props => props.theme.desktop.purple_medium};
	border-bottom: 2px solid ${props => props.theme.desktop.purple_medium};
	border-radius: 0 0 1rem 1rem;
`;

const Heading = styled.h2`
	font-size: 1.5rem;
	color: ${props => props.theme.desktop.purple_dark};
	margin-bottom: 10px;
`;

const Paragraph = styled.p`
	font-size: 1.2rem;
	line-height: 1.6rem;
	color: ${props => props.theme.desktop.purple_dark};
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 30px;
`;

const Button = styled.button`
	width: 100%;
	height: 4rem;
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
