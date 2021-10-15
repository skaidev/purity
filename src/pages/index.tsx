import Frontlayout from "layouts/Frontlayout";
import React from "react";
import styled from "styled-components";

const HomePage = () => {
	return (
		<Frontlayout>
			<Wrapper>
				<div className="container">
					<button className="btn btn-primary">Primary</button>
				</div>
			</Wrapper>
		</Frontlayout>
	);
};

export default HomePage;

const Wrapper = styled.div``;
