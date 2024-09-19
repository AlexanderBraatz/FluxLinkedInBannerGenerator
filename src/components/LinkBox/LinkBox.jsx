import styled from 'styled-components';
import React from 'react';

//images
// import QRCode from './../../assets/images/QRCode.png';
import QRCode from './../../assets/aiImages/qrImage.png';

export default function LinkBox({ isLoading, bannerImageURL }) {
	return (
		<Container>
			{isLoading ? (
				<Empty></Empty>
			) : (
				<>
					<StyledQRCode src={QRCode} />

					<LinkContainer
						target="_blank"
						href={bannerImageURL}
					>
						<Link>Klick hier für dein Bild</Link>
					</LinkContainer>
				</>
			)}
		</Container>
	);
}

const Empty = styled.div``;

const Container = styled.div`
	width: 22.3rem;
	height: 26.3rem;
	margin: auto;
	margin-top: 3rem;
	position: relative;
	margin-bottom: 5rem;
	background-color: ${props => props.theme.desktop.purple_light};
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 1rem;
	padding-bottom: 1.5rem;
`;
const StyledQRCode = styled.img`
	width: 18.3rem;
	height: 18.5rem;
	border-radius: 1rem;
	margin-top: 1.5rem;
`;
const LinkContainer = styled.a`
	/* border-radius: 1rem; */
	background-color: ${props => props.theme.desktop.white};
	color: ${props => props.theme.desktop.purple_dark};
	padding: 6px 20px;
	border: 2px solid ${props => props.theme.desktop.purple_dark};
	border-radius: 10px;
	margin-top: 1rem;
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
const Link = styled.span`
	font-weight: medium;
	font-size: 16px;
	line-height: 2.2rem;
`;
