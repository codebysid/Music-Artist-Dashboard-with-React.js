import React from "react";
// import { fakeEarnings } from "../assets/data";
import { genRandomNumber } from "../assets/data";
import { MdOutlineExpandMore } from "react-icons/md";

const DashboardLeftScreen2 = () => {
  const fakeEarningDataSet = [
    genRandomNumber(4),
    genRandomNumber(4),
    genRandomNumber(4),
    genRandomNumber(4),
  ];
  return (
    <div>
      <div className="labels">
        <p className="streamsText">
          Earnings
          <span>$6,243</span>
        </p>
        <p>
          <a href="#" className="showMore">
            Show More
            <MdOutlineExpandMore/>
          </a>
        </p>
      </div>
      <div className="slidersParent">
        {fakeEarningDataSet
          ? fakeEarningDataSet.map((ele, key) => {
              return (
                <div key={key} className="sliders">
                  <div className="clearingAndEarning">
                    CLEARING
                    <span>${ele}</span>
                  </div>
                  <meter
                    className="meter"
                    min={100}
                    max={999}
                    value={ele.substring(0, 3)}
                  ></meter>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default DashboardLeftScreen2;
