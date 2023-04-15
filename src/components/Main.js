import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const Main = () => {
	const [counterOn, setCounterOn] = useState(false);

	return (
		<ScrollTrigger
			onEnter={() => {
				setCounterOn(true);
			}}
			onExit={() => {
				setCounterOn(false);
			}}
		>
			<div className="main">
				<div className="img-container">
					<img
						src="https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2023/03/banner.png"
						alt=""
					/>
				</div>
				<div className="top-div">
					<div className="heading">
						<h1>
							The #1 <span className="color-green">Job Board for</span> Hiring
							or Find your next job
						</h1>
					</div>
					<div className="heading-2">
						Each month, more than 3 million job seekers turn to website in their
						search for work, making over 140,000 applications every single day
					</div>
					<div className="form-container">
						<span className="select-icon">
							<img src="/assets/images/industry.svg" alt="" />
						</span>
						<div className="select-ele">
							<select name="industry">
								<option value="Industry" selected>
									Industry
								</option>
								<option value="Production">Production</option>
								<option value="Management">Management</option>
							</select>
						</div>
						<span className="select-icon">
							<img src="/assets/images/location.svg" alt="" />
						</span>
						<div className="select-ele">
							<select name="industry" id="">
								<option value="Location" selected>
									Location
								</option>
								<option value="UK">UK</option>
								<option value="USA">USA</option>
								<option value="">Dallas</option>
							</select>
						</div>
						<span className="select-icon">
							<img src="/assets/images/key-numbers.svg" alt="" />
						</span>
						<div className="select-ele">
							<input type="text" placeholder="Keyword" />
						</div>
						<div className="search-btn">
							<img src="/assets/images/search-icon.svg" alt="" />
							{/* <span className="select-icon"><img src="/assets/images/search-icon.svg" alt="" /></span> */}
							<span>
								<input type="submit" value="Submit" />
							</span>
						</div>
					</div>
					<div className="list-div">
						<strong>Popular Searches:</strong>
						<a>Content Writer</a>
						<a>Finance</a>
						<a>Human Resource</a>
						<a>Management</a>
					</div>

					<div className="counter-div">
						<h3>
							{counterOn && (
								<CountUp start={0} end={265} duration={2} delay={0} />
							)}{" "}
							k+
							<p>Daily jobs posted</p>
						</h3>
						<h3>
							{counterOn && (
								<CountUp start={0} end={17} duration={3} delay={0} />
							)}{" "}
							k+
							<p>Recruiters</p>
						</h3>
						<h3>
							{counterOn && (
								<CountUp start={0} end={15} duration={3} delay={0} />
							)}{" "}
							k+
							<p>Freelancers</p>
						</h3>
						<h3>
							{counterOn && (
								<CountUp start={0} end={28} duration={3} delay={0} />
							)}{" "}
							k+
							<p>Blog Tips</p>
						</h3>
					</div>
				</div>
			</div>
		</ScrollTrigger>
	);
};
export default Main;
