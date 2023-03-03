import './App.css';
import React from 'react';
import Square from './component/Square';
import styled from 'styled-components';
// import SampleSquare from './component/Square';
const TestCarrier = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;
const TestBox = styled.div`
	width: 250px;
	height: 250px;
	margin: 100px 50px 0 50px;
	background-color: gray;
`;
const NameBox = styled.div`
	width: 250px;
	height: 30px;
	text-align: center;
	font-size: 20px;
	font-weight: bold;
`;
function App() {
	return (
		<>
			<TestCarrier>
				<TestBox>
					<Square />
					<NameBox>test1</NameBox>
				</TestBox>
				<TestBox>
					<Square />
					<NameBox>test1</NameBox>
				</TestBox>
				<TestBox>
					<Square />
					<NameBox>test1</NameBox>
				</TestBox>
			</TestCarrier>
			<TestCarrier>
				<TestBox>
					<Square />
					<NameBox>test1</NameBox>
				</TestBox>
				<TestBox>
					<Square />
					<NameBox>test1</NameBox>
				</TestBox>
				<TestBox>
					<Square />
					<NameBox>test1</NameBox>
				</TestBox>
			</TestCarrier>
			<TestCarrier>
				<TestBox>
					<Square />
					<NameBox>test1</NameBox>
				</TestBox>
				<TestBox>
					<Square />
					<NameBox>test1</NameBox>
				</TestBox>
				<TestBox>
					<Square />
					<NameBox>test1</NameBox>
				</TestBox>
			</TestCarrier>
			<TestCarrier>
				<TestBox>
					<Square />
					<NameBox>test1</NameBox>
				</TestBox>
				<TestBox>
					<Square />
					<NameBox>test1</NameBox>
				</TestBox>
				<TestBox>
					<Square />
					<NameBox>test1</NameBox>
				</TestBox>
			</TestCarrier>
		</>
	);
}

export default App;
