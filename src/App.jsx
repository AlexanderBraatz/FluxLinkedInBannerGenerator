import { styled } from 'styled-components';
import './App.css';
import './assets/fonts/fonts.css';

//components
import Header from './components/Header/Header.jsx';
import Instructions from './components/Instructions/Instructions.jsx';
import Form from './components/Form/Form.jsx';
import Circles from './components/Circles/Circles.jsx';
import GeneratedBanner from './components/GeneratedBanner/GeneratedBanner.jsx';

function App() {
	return (
		<OuterContainer id="OuterContainer">
			<Header />
			<BodyContainer>
				<Instructions />
				<Form />
				<Circles isLoading={false} />
				<GeneratedBanner />
				<Circles isLoading={false} />
			</BodyContainer>
		</OuterContainer>
	);
}

const OuterContainer = styled.div`
	width: 100vw;
	height: fit-content;
	background-color: red;
	background-color: ${props => props.theme.desktop.white};
`;
const BodyContainer = styled.div`
	max-width: 107.8rem;
	height: fit-content;
	background-color: ${props => props.theme.desktop.grey};
	border-radius: 10px;
	margin: auto;
	padding-bottom: 20rem;
`;
export default App;
