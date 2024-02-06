import "./news.css";
import Subject from "../../../data/raw_subjects";
import User from "../../../data/raw_users"; 
import { Link, ScrollRestoration, useLocation } from "react-router-dom";
import { useState } from "react";
import Day from "./currentDay";
import Year from "./currentYear";
import {
  BsFillChatLeftDotsFill,
  BsPersonCircle,
  BsGrid3X3GapFill,
} from "react-icons/bs";
import { AiOutlineMenu, AiFillBell } from "react-icons/ai";
import { BiSolidCalendar, BiSolidBookReader } from "react-icons/bi";
import { RiShutDownLine, RiGraduationCapFill } from "react-icons/ri";
import { FaDollarSign, FaThList, FaListUl, FaScroll } from "react-icons/fa";
import { MdAccountBox } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

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
    // <div className="ku-news-screen">
    //   <Drawer />
    //   <Header />

    //   <section className="ku-news-screen-container ">
    //     <section className="ku-header ">
    //       <div className="ku-welcome text-2xl">
    //         ยินดีต้อนรับเข้าสู่ระบบลงทะเบียนนิสิต
    //       </div>

    //       <section className="flex">
    //         <div className="ku-day">
    //           <Day />
    //         </div>
    //         <div className="ku-semeter text-xs">ภาคต้น 2566</div>
    //       </section>
    //     </section>

    //     <section className="ku-options flex">
    //       <button
    //         onClick={handleSubjectClick}
    //         className={isSubject ? "ku-subject-tap-selected" : "ku-subject-tap"}
    //       >
    //         รายวิชา
    //       </button>
    //       <button
    //         onClick={handleNormalClick}
    //         className={isNormal ? "ku-normal-tap-selected" : "ku-normal-tap"}
    //       >
    //         ทั่วไป
    //       </button>
    //     </section>
    //     <section className="ku-announce-container">
    //       <div className="ku-announce-header-container flex">
    //         <div className="ku-announce-icon">
    //           <div className="text-xl">
    //             <BsFillChatLeftDotsFill />
    //           </div>
    //         </div>

    //         <div className="text-xl pl-5">
    //           {isSubject ? "ประกาศรายวิชา" : "ประกาศทั่วไป"}
    //         </div>
    //       </div>
    //       <div className="ku-announce-body-container ">
    //         <div className="ku-announce-chat-icon text-7xl">
    //           <BsFillChatLeftDotsFill />
    //         </div>
    //         <div>ยังไม่มีประกาศรายวิชาจากอาจารย์ผู้สอน</div>
    //       </div>
    //     </section>
    //   </section>

    //   <section className="ku-footer-container">
    //     <footer className="ku-footer">
    //       2023 © สำนักบริหารการศึกษา Kasetsart University © Build
    //       number:1.0.0002
    //     </footer>
    //   </section>
    // </div>
    <div className="ku-layout-wrapper">
      <div className="ku-layout-inner">
        {/* <nav className={`ku-side-bar ${width ? "" : "close"}`}> */}
        {/* <div className="ku-side-bar-header">
            <div className="one">
              <BsPersonCircle className="icon" />
            </div>
            <div className="four">
              <div className="text-container">
                <div className="ku-name">รวิภาส ดำเด่นงาม</div>
                <div className="ku-status">นิสิตปัจจุบัน</div>
              </div>
            </div>
            <div className="two">
              <AiOutlineMenu className="icon" onClick={handleDrawerOpen} />
            </div>
          </div>
          <hr className="mt-0" />
          <div className="ku-side-bar-inner">
            <a
              className={`ku-side-bar-items ${isPageActive ? "selected" : ""}`}
            >
              <Link to="/news" className="ku-link">
                <div className="ku-side-bar-icon-container">
                  <BiSolidCalendar className="size" />
                </div>
                <div className="ku-side-bar-info-container">
                  <div className={`ku-info-text ${width ? "" : "close"}`}>
                    ข่าวสารนิสิต
                  </div>
                </div>
              </Link>
            </a>
            <a className={`ku-side-bar-items`}>
              <Link to="/subject" className="ku-link">
                <div className="ku-side-bar-icon-container">
                  <BiSolidBookReader className="size" />
                </div>
                <div className="ku-side-bar-info-container">
                  <div className={`ku-info-text ${width ? "" : "close"}`}>
                    ตารางเรียน/ตารางสอบ
                  </div>
                </div>
              </Link>
            </a>
            <a className={`ku-side-bar-items`}>
              <Link to="/subject" className="ku-link">
                <div className="ku-side-bar-icon-container">
                  <BsGrid3X3GapFill className="size" />
                </div>
                <div className="ku-side-bar-info-container">
                  <div className={`ku-info-text ${width ? "" : "close"}`}>
                    วิชาที่เปิดให้ลงทะเบียน
                  </div>
                </div>
              </Link>
            </a>
            <a className={`ku-side-bar-items`}>
              <Link to="/subject" className="ku-link">
                <div className="ku-side-bar-icon-container">
                  <FaDollarSign className="size" />
                </div>
                <div className="ku-side-bar-info-container">
                  <div className={`ku-info-text ${width ? "" : "close"}`}>
                    เลือกรูปแบบ/การเงิน
                  </div>
                </div>
              </Link>
            </a>
            <a className={`ku-side-bar-items`}>
              <Link to="/subject" className="ku-link">
                <div className="ku-side-bar-icon-container">
                  <FaThList className="size" />
                </div>
                <div className="ku-side-bar-info-container">
                  <div className={`ku-info-text ${width ? "" : "close"}`}>
                    ลงทะเบียน/เพิ่ม-ถอน
                  </div>
                </div>
              </Link>
            </a>
            <a className={`ku-side-bar-items`}>
              <Link to="/subject" className="ku-link">
                <div className="ku-side-bar-icon-container">
                  <FaListUl className="size" />
                </div>
                <div className="ku-side-bar-info-container">
                  <div className={`ku-info-text ${width ? "" : "close"}`}>
                    ผลการลงทะเบียน
                  </div>
                </div>
              </Link>
            </a>
            <a className={`ku-side-bar-items`}>
              <Link to="/subject" className="ku-link">
                <div className="ku-side-bar-icon-container">
                  <RiGraduationCapFill className="size" />
                </div>
                <div className="ku-side-bar-info-container">
                  <div className={`ku-info-text ${width ? "" : "close"}`}>
                    ตรวจสอบผลการเรียน
                  </div>
                </div>
              </Link>
            </a>
            <a className={`ku-side-bar-items`}>
              <Link to="/subject" className="ku-link">
                <div className="ku-side-bar-icon-container">
                  <FaScroll className="size" />
                </div>
                <div className="ku-side-bar-info-container">
                  <div className={`ku-info-text ${width ? "" : "close"}`}>
                    ประวัติการลงทะเบียน
                  </div>
                </div>
              </Link>
            </a>
            <a className={`ku-side-bar-items`}>
              <Link to="/subject" className="ku-link">
                <div className="ku-side-bar-icon-container">
                  <BsGrid3X3GapFill className="size" />
                </div>
                <div className="ku-side-bar-info-container">
                  <div className={`ku-info-text ${width ? "" : "close"}`}>
                    สถิติ
                  </div>
                </div>
              </Link>
            </a>
            <a className={`ku-side-bar-items`}>
              <Link to="/subject" className="ku-link">
                <div className="ku-side-bar-icon-container">
                  <MdAccountBox className="size" />
                </div>
                <div className="ku-side-bar-info-container">
                  <div className={`ku-info-text ${width ? "" : "close"}`}>
                    ประวัตินิสิต
                  </div>
                </div>
              </Link>
            </a>
          </div> */}
        <DrawerNew />
        {/* </nav> */}
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
                      <span>{me.idCode} {me.titleTh} {me.firstNameTh} {me.lastNameTh}</span>
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
                <div style={{ paddingBottom: 16 }} className="">
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
                          <div className="semeter flex">ภาคต้น&nbsp;<Year/></div>
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
                            <span className="">
                              <div className="">
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
