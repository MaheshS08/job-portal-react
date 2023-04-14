import React from "react";
const Top_Recruiters = () => {
  const arr = [
    {
      title: "Fireworks",
      rating: "4",
      images: "./assets/images/recruiter-img1.svg",
      loc: "chicago,us",
      locimage:"./assets/images/loc.png",
      no_of_jobs:"No open jobs",
    },
    {
      title: "Dailymotion",
      rating: "4",
      images: "./assets/images/recruiter-img2.svg",
      loc: "chicago,us",
      locimage:"./assets/images/loc.png",
      no_of_jobs:"No open jobs",
    },
    {
      title: "Callaway golf",
      rating: "4",
      images: "./assets/images/recruiter-img3.svg",
      loc: "chicago,us",
      locimage:"./assets/images/loc.png",
      no_of_jobs:"No open jobs",
    },
    {
      title: "Baseball Savings",
      rating: "4",
      images: "./assets/images/recruiter-img4.svg",
      loc: "chicago,us",
      locimage:"./assets/images/loc.png",
      no_of_jobs:"No open jobs",
    },
    {
      title: "Carols Daughter",
      rating: "4",
      images: "./assets/images/recruiter-img5.svg",
      loc: "chicago,us",
      locimage:"./assets/images/loc.png",
      no_of_jobs:"No open jobs",
    },
    {
        title: "Wanderu",
        rating: "4",
        images: "./assets/images/recruiter-img6.svg",
        loc: "chicago,us",
        locimage:"./assets/images/loc.png",
        no_of_jobs:"No open jobs",
      },
      {
        title: "Bing Search",
        rating: "4",
        images: "./assets/images/recruiter-img7.svg",
        loc: "chicago,us",
        locimage:"./assets/images/loc.png",
        no_of_jobs:"No open jobs",
      },
      {
        title: "Percepta",
        rating: "4",
        images: "./assets/images/recruiter-img8.svg",
        loc: "chicago,us",
        locimage:"./assets/images/loc.png",
        no_of_jobs:"No open jobs",
      },
      {
        title: "Tesla",
        rating: "4",
        images: "./assets/images/recruiter-img9.svg",
        loc: "chicago,us",
        locimage:"./assets/images/loc.png",
        no_of_jobs:"No open jobs",
      },
      {
        title: "Cartoys",
        rating: "4",
        images: "./assets/images/recruiter-img10.svg",
        loc: "chicago,us",
        locimage:"./assets/images/loc.png",
        no_of_jobs:"No open jobs",
      },
      {
        title: "Amazon",
        rating: "4",
        images: "./assets/images/recruiter-img11.svg",
        loc: "chicago,us",
        locimage:"./assets/images/loc.png",
        no_of_jobs:"No open jobs",
      },
      {
        title: "Ashford",
        rating: "4",
        images: "./assets/images/recruiter-img12.svg",
        loc: "chicago,us",
        locimage:"./assets/images/loc.png",
        no_of_jobs:"No open jobs",
      },
  ];
  return (
    <div>
      <h1>Top Recruiters</h1>
      <p>Discover your next career move, freelance gig, or internship</p>

      <div className="row-5">
        {arr.map((ele) => {
          return (
            <div className="container5">
              <img src={ele.images} />
              <div class="text3">
                <a href="#">
                  <b>{ele.title}</b>
                </a>
              </div>
              <div className="locimage">
              <img src={ele.locimage}/>
              </div>
              <div className="loc">
              {ele.loc}
              <span className="jobs_count"><b>{ele.no_of_jobs}</b></span> 
              </div>
            
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Top_Recruiters;
