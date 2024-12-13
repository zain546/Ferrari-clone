import "./Hero.css";
import { MdOutlineArrowForward } from "react-icons/md";
import { IoMdShare } from "react-icons/io";
import Sidebar from "../Sidebar/Sidebar";
const Hero = () => {
  return (
    <div>
      <video
        style={{
          width: "100%",
          height: "100%",
        }}
        autoPlay
        loop
        muted
        src="../../public/video2.mp4"
      ></video>
      <div className="sideBars">
        <div className="left-menu">
          <Sidebar />
        </div>
        <div className="share-btn icon-container">
          <IoMdShare className="icon" size={18} />
        </div>
      </div>
      <div className="hero-text">
        <h2>Sports Car</h2>
        <h1>Starts your Engine</h1>
        <div className="discover">
          <p>Discover the ferrari line up </p>
          <div className="icon-container">
            <MdOutlineArrowForward className="icon" size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
