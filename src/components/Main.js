import React from "react";
// import bg from "/images/bg.jpg";
const Main = () => {
	return (
	
		<div className="main">
			<div
				className="img-container"
				// style={{
				// 	backgroundImage: `url(${"https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2023/03/banner.png"})`,
				// 	maxHeight: "100%",
				// 	maxWidth: "100%",
				// }}
			>
				<img
					src="https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2023/03/banner.png"
					alt=""
				/>
				
			</div>
            <div className="top-div">
                <div className="heading">
                    <h1>The #1 <span className="color-green">Job Board for</span> Hiring or Find your next job</h1>
                </div>
                <div className="heading-2">Each month, more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day</div>
            </div>
		</div>
		 
	);
};
export default Main;
