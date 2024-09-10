import styled from 'styled-components';
import React from 'react';

//images
import Streets from './../../assets/images/Streets.png';
import LinkedInAvatar from './../../assets/images/AvatarSquare.jpeg';

export default function GeneratedBanner({ isLoading, bannerImage }) {
	return (
		<Container>
			<Image src={bannerImage} />
			<AvatarContainer>
				<Avatar src={LinkedInAvatar} />
			</AvatarContainer>
		</Container>
	);
}

const Container = styled.div`
	width: 94.8rem;
	height: 23.7rem;
	margin: auto;
	margin-top: 3rem;
	position: relative;
	margin-bottom: 5rem;
	background-color: ${props => props.theme.desktop.grey2};
	border-radius: 1rem;
`;
const Image = styled.img`
	border-radius: 1rem;
`;
const AvatarContainer = styled.div`
	width: 18.8rem;
	height: 18.8rem;
	position: absolute;
	top: 10.5rem;
	left: 3.1rem;
`;
const Avatar = styled.img`
	width: 18.8rem;
	height: 18.8rem;
	border-radius: 50%;
	border: 0.6rem solid ${props => props.theme.desktop.white};
`;
