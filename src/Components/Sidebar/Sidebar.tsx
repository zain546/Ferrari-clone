import "./Sidebar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { RiArrowRightSLine } from "react-icons/ri";
import { useState } from "react";
const Sidebar = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  return (
    <>
      <div className="hamburger show">
        <GiHamburgerMenu
          className="hamB"
          size={19}
          onClick={toggleSidebar}
          color="white"
        />
        scuderia ferrari hp
      </div>
      <aside>
        <div className={`sidebar ${isSidebarVisible ? "visible" : ""}`}>
          <div className="first-bar">
            <div className="sideBar-logo">
              <img width={30} src="./public/logo.png" alt="logo" />
              <div className="cross icon-container">
                <RxCross2
                  className="icon"
                  color="white"
                  size={18}
                  onClick={toggleSidebar}
                />
              </div>
            </div>
          </div>
          <div className="second-bar">
            <div className="bar-items">
              <h3>formula 1</h3>
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">sf-24</a>
                </li>
                <li>
                  <a href="">Team</a>
                  <RiArrowRightSLine color="#bdb9b9" size={18} />
                </li>
                <li>
                  <a href="">news</a>
                </li>
                <li>
                  <a href="">races</a>
                </li>
                <li>
                  <a href="">partners</a>
                </li>
                <li>
                  <a href="">hospitality</a>
                </li>
                <li>
                  <a href="">media galleries</a>
                  <RiArrowRightSLine color="#bdb9b9" size={18} />
                </li>
                <li>
                  <a href="">history</a>
                  <RiArrowRightSLine color="#bdb9b9" size={18} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
