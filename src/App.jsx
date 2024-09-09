import { styled } from 'styled-components';
import './App.css';
import './assets/fonts/fonts.css';

//components
import Header from './components/Header/Header.jsx';

function App() {
	return (
		<OuterContainer id="OuterContainer">
			<Header />
			<BodyContainer>
				<Title>Is it the T'ing ?</Title>
			</BodyContainer>
		</OuterContainer>
	);
}

const Title = styled.h1`
	background-color: red;

	height: 100px;
	font-size: 6rem;
	font-weight: 100;
`;
const OuterContainer = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: red;
	background-color: ${props => props.theme.desktop.white};
`;
const BodyContainer = styled.div`
	max-width: 107.8rem;
	height: 100vh;
	background-color: ${props => props.theme.desktop.grey};

	margin: auto;
`;
export default App;
