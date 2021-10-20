import React from "react";
import styled from "styled-components";

const HomePage = () => {
	return (
			<Wrapper>
                <section className="container">
                <div className="row">
                    <div className=" col-md-6 hero-section mt-5">
                        <h1 className=" display-4 fw-bold mt-5 mb-3">Equipment that <br /> are built to last</h1>
                        <p className="fw-light mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dicta totam perferendis pariatur explicabo quae aut optio quisquam est laborum? Animi fugiat sapiente cupiditate 
                        vero laboriosam, expedita delectus quam mollitia praesentium iste corporis optio corrupti! Nisi quo, debitis commodi, ex esse minima possimus reprehenderit, soluta distinctio nihil beatae perspiciatis pariatur!</p>
                    </div>
                    <div className=" col-md-6"></div>
                </div>
            </section>
			</Wrapper>
	);
};

export default HomePage;

const Wrapper = styled.div`
	background-image: url("/image/bgImage-2");
    background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	width: 100%;
	min-height: 88.1vh;
`;
