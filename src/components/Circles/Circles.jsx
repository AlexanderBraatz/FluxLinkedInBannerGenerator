import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

export default function Circles({ isLoading }) {
	const [number, setNumber] = useState(7);

	useEffect(() => {
		let intervalId;
		if (isLoading) {
			intervalId = setInterval(() => {
				setNumber(prevNumber => (prevNumber < 7 ? prevNumber + 1 : 1));
			}, 200);
		} else {
			setNumber(7);
		}
		return () => {
			if (intervalId) clearInterval(intervalId);
		};
	}, [isLoading]);

	return (
		<Container>
			<Circle
				id={'one'}
				className={number == 1 ? 'on' : number == 2 ? 'fading' : 'off'}
			/>
			<Circle
				id={'two'}
				className={number == 2 ? 'on' : number == 3 ? 'fading' : 'off'}
			/>
			<Circle
				id={'three'}
				className={number == 3 ? 'on' : number == 4 ? 'fading' : 'off'}
			/>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	position: relative;
	top: -1rem;
`;

const Circle = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${props => props.theme.desktop.purple_light};
	transition: 0.4s ease-out background-color;

	&.on {
		background-color: ${props => props.theme.desktop.purple_dark};
	}
	&.fading {
		background-color: ${props => props.theme.desktop.purple_medium};
	}
`;
