import React from 'react'
import Flag from "react-world-flags";
import { flagData } from '../assets/data';
import "../styling/DashboardLeftScreen5.css"
export const DashboardLeftScreen5 = () => {
    
  return (
    <div>
      <p
      className='topListenersHeading'
      >Top Listener's</p>
      <div className="flags">
        {flagData.map((ele,key)=>{
            return (
                <ul 
                  className="flagDiv" 
                  key={key}>
                 
                  <Flag className="flagComp" code={ele.code} />
                  <span className="flagPer">{ele.per}</span>
                </ul>
            );
        })}
      </div>
    </div>
  );
}
