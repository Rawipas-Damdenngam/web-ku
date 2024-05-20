import { useState } from "react";
import { AiFillBell } from "react-icons/ai";
import {
  BsFillChatLeftDotsFill
} from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { RiShutDownLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import User from "../../../data/raw_users";
import Day from "./currentDay";
import Year from "./currentYear";
import "./news.css";

import DrawerNew from "../drawer/drawer_new";

function News() {
  const me = User[1];
  const location = useLocation();
  const isPageActive = (page) => {
    return location.pathname === page;
  };
  const [isSubject, setIsSubject] = useState(true);
  const [isNormal, setIsNormal] = useState(false);
  const [width, setWidth] = useState(true);

  const handleDrawerOpen = () => {
    setWidth(!width);
    console.log(width);
  };

  const handleSubjectClick = () => {
    setIsSubject(true);
    setIsNormal(false);
  };

  const handleNormalClick = () => {
    setIsSubject(false);
    setIsNormal(true);
  };

  return (
    <div className="ku-layout-wrapper">
      <div className="ku-layout-inner">
        <DrawerNew />
        <div className="ku-layout-container">
          <nav className="ku-sticky-top-bar">
            <div className="layout">
              <div className="left">
                <div>ระบบลงทะเบียนนิสิต มหาวิทยาลัยเกษตรศาสตร์</div>
              </div>
              <div className="right">
                <div className="inner-layout">
                  <div className="one">
                    <AiFillBell className="bell" />
                  </div>
                  <div className="two">
                    <div>TH</div>
                    <div className="flex items-center">
                      <IoIosArrowDown />
                    </div>
                  </div>
                  <div className="three">|</div>
                  <div className="four">
                    <span>
                      <span>
                        {me.idCode} {me.titleTh} {me.firstNameTh}{" "}
                        {me.lastNameTh}
                      </span>
                    </span>
                  </div>
                  <div className="five">
                    <RiShutDownLine className="poweroff" />
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="ku-content-layout">
            <div className="ku-content-container">
              <div>
                <div style={{ paddingBottom: 16 }}>
                  <div className="ku-welcome-container">
                    <div
                      style={{ paddingLeft: 12, paddingRight: 12 }}
                      className="ku-welcome-inner-left"
                    >
                      <div className="ku-welcome-text-box">
                        <div style={{ marginRight: 24, fontSize: 21 + "px" }}>
                          ยินดีต้อนรับเข้าสู่ระบบลงทะเบียนนิสิต
                        </div>
                        <div
                          style={{ marginTop: 16, marginBottom: 24 }}
                          className="row"
                        >
                          <div className="day">
                            <Day />
                          </div>
                          <div className="semeter flex">
                            ภาคต้น&nbsp;
                            <Year />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ku-welcome-inner-right">
                      <div>2</div>
                    </div>
                  </div>
                </div>
                <div>
                  <hr
                    style={{
                      marginBottom: 24,
                      marginLeft: -2 + "rem",
                      marginRight: -2 + "rem",
                    }}
                  />
                  <div className="ku-body-layout">
                    <div className="ku-body-container">
                      <div className="ku-button-container">
                        <button
                          onClick={handleSubjectClick}
                          className={`${isSubject ? "active" : ""}`}
                        >
                          รายวิชา
                        </button>
                        <button
                          onClick={handleNormalClick}
                          className={`${isNormal ? "active" : ""}`}
                        >
                          ทั่วไป
                        </button>
                      </div>
                      <div className="ku-ann-card">
                        <div className="ku-ann-card-header">
                          <div className="ku-ann-icon-frame">
                            <div className="ku-ann-icon">
                              <BsFillChatLeftDotsFill />
                            </div>
                          </div>
                          <div className="ku-ann-text">
                            {`${isSubject ? "ประกาศรายวิชา" : "ประกาศทั่วไป"}`}
                          </div>
                        </div>
                        <div className="ku-ann-card-body-container">
                          <div className="ku-ann-card-body">
                            <span>
                              <div>
                                <BsFillChatLeftDotsFill className="chat-icon" />
                              </div>
                            </span>
                            <div className="mt-12">
                              <p className="mb-4">
                                ยังไม่มีประกาศรายวิชาจากอาจารย์ผู้สอน
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <div className="footer-container-wrap">
              <div className="footer-body">
                <span className="footer-text">
                  2023 © สำนักบริหารการศึกษา Kasetsart University © Build
                  number:1.0. 0002
                </span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default News;
