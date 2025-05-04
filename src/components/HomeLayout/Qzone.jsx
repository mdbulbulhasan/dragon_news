import React from 'react';
import siwimmingImage from "../../assets/swimming.png"
import classImage from "../../assets/class.png"
import playImage from "../../assets/playground.png"

const Qzone = () => {
    return (
      <div className="bg-base-200 p-3">
        <h2 className="font-bold mb-5">Qzone</h2>
        <div className="">
          <img className="w-full" src={siwimmingImage} alt="" />
          <img className="w-full" src={classImage} alt="" />
          <img className="w-full" src={playImage} alt="" />
        </div>
      </div>
    );
};

export default Qzone;