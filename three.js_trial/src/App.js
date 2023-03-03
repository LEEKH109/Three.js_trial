import './App.css';
import React from 'react';
import Square from './component/Square';
import styled from 'styled-components';
import ModelReact from './component/React';

// import SampleSquare from './component/Square';
const TestCarrier = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;
const TestBox = styled.div`
	width: 210px;
	height: 250px;
	margin: 100px 50px 0 50px;
	border: solid 2px;
	border-radius: 25px;
	overflow: hidden;
`;
const NameBox = styled.div`
	width: 210px;
	height: 30px;
	text-align: center;
	font-size: 20px;
	font-weight: bold;
	margin-top: 10px;
`;
function App() {
	return (
		<>
			<TestCarrier>
				<TestBox>
					<ModelReact />
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
