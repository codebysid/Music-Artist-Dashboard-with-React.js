import React ,{useState,useEffect} from "react";
import {Avatar} from "@mui/material"
import '../styling/DashboardLeftScreen4.css'
import {MdOutlineExpandMore} from 'react-icons/md'
const DashboardLeftScreen4 = () => {
  
  const [randomUserData,setRandomUserData]=useState([])
  
    const randomUser=async()=>{
      const data = await fetch("https://randomuser.me/api/?results=3");
      const response=await data.json()
      setRandomUserData(prev=>{
        return response.results
      })
  }

  useEffect(()=>{
    randomUser()
  },[])

  return (
    <div className="performance">
      <p
      className="reviewLabel"
      >
        Review's
      </p>
        {randomUserData.length>0?randomUserData.map((ele,key)=>{
          const review = {
            0: "I am addicted to this song",
            1: "Great Music",
            2: "Feel Good",
          };
          return (
            <div 
            key={key} 
            className="userReview"
            >
              <Avatar 
              src={ele.picture.medium}
              />
              <div 
              className="userDetail"
              >
                <span 
                className="userName"
                >
                  {ele.name.first+" "+ele.name.last}
                  </span>
                <span 
                className="review">"
                  {review[key]}"
                </span>
              </div>
            </div>
          )
        }):null}
        <a href="#" className="showMoreReviewsButton">
          More Reviews
          <MdOutlineExpandMore/>
          </a>
    </div>
  );
};

export default DashboardLeftScreen4;
