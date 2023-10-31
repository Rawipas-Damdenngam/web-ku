import { Link, ScrollRestoration, useLocation } from "react-router-dom";
import { useState } from "react";
import "./subject.css";
import Day from "../news/currentDay";
import {
  BsFillChatLeftDotsFill,
  BsPersonCircle,
  BsGrid3X3GapFill,
} from "react-icons/bs";
import {
  AiOutlineMenu,
  AiFillBell,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import { BiSolidCalendar, BiSolidBookReader } from "react-icons/bi";
import { RiShutDownLine, RiGraduationCapFill } from "react-icons/ri";
import {
  FaDollarSign,
  FaThList,
  FaListUl,
  FaScroll,
  FaSync,
} from "react-icons/fa";
import { MdAccountBox } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import DrawerNew from "../drawer/drawer_new";

function Subject() {
  const [isSubject, setIsSubject] = useState(true);
  const [isNormal, setIsNormal] = useState(false);
  const [isButtDisable1, setButtDisable1] = useState(false); // [true, false, false
  const [isButtDisable2, setButtDisable2] = useState(true); // [true, false, false
  const [isButtDisable3, setButtDisable3] = useState(true); // [true, false, false
  const [isButtActive1, setIsButtActive1] = useState(true);
  const [isButtActive2, setIsButtActive2] = useState(false);
  const [isButtActive3, setIsButtActive3] = useState(false);

  const handleButtActive1 = () => {
    setIsButtActive1(true);
    setIsButtActive2(false);
    setIsButtActive3(false);
    setButtDisable1(false);
    setButtDisable2(true);
    setButtDisable3(true);
  };
  const handleButtActive2 = () => {
    setIsButtActive1(false);
    setIsButtActive2(true);
    setIsButtActive3(false);
    setButtDisable1(true);
    setButtDisable2(false);
    setButtDisable3(true);
  };
  const handleButtActive3 = () => {
    setIsButtActive1(false);
    setIsButtActive2(false);
    setIsButtActive3(true);
    setButtDisable1(true);
    setButtDisable2(true);
    setButtDisable3(false);
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
    <div className="ku-layout-wrapper layout-2">
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
                    <div className="flex items-center"><IoIosArrowDown/></div>
                  </div>
                  <div className="three">|</div>
                  <div className="four">
                    <span>
                      <span>6310451367 รวิภาส ดำเด่นงาม</span>
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
              <div style={{paddingBottom:90+"px"}}>
                <div style={{ paddingBottom: 16 }} className="">
                  <div className="ku-welcome-container">
                    <div
                      style={{ paddingLeft: 12, paddingRight: 12 }}
                      className="ku-welcome-inner-left"
                    >
                      <div className="ku-welcome-text-box">
                        <div style={{ marginRight: 24, fontSize: 21 + "px" }}>
                          ตารางเรียน/ตารางสอบ
                        </div>
                        <div
                          style={{ marginTop: 16, marginBottom: 24 }}
                          className="row"
                        >
                          <div className="day">
                            <Day />
                          </div>
                          <div className="semeter">ภาคต้น 2566</div>
                        </div>
                      </div>
                    </div>
                    <div className="ku-welcome-inner-right">
                      <div>
                        <button className="ku-sync-button">
                          <i>
                            <FaSync />
                          </i>
                        </button>
                      </div>
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
                  <div className="ku-row">
                    <div className="ku-col">
                      <div className="ku-butt-group">
                        <button
                          type="button"
                          className={`ku-butt-schedule ${
                            isButtActive1 ? "active" : "inactive"
                          }`}
                          disabled={isButtDisable1}
                          onClick={handleButtActive1}
                        >
                          ตารางเรียน
                        </button>
                        <button
                          type="button"
                          className={`ku-butt-schedule1 ${
                            isButtActive2 ? "active" : "inactive"
                          }`}
                          disabled={isButtDisable2}
                          onClick={handleButtActive2}
                        >
                          สอบกลางภาค
                        </button>
                        <button
                          type="button"
                          className={`ku-butt-schedule2 ${
                            isButtActive3 ? "active" : "inactive"
                          }`}
                          disabled={isButtDisable3}
                          onClick={handleButtActive3}
                        >
                          สอบปลายภาค
                        </button>
                      </div>
                    </div>
                    <div className="ku-col">
                      <div className="ku-butt-group2">
                        <button type="button" className="ku-icon-left">
                          <div>
                            <AiOutlineLeft />
                          </div>
                        </button>
                        <button type="button" className="ku-mid">
                          26/06/2566 - 22/10/2566
                        </button>
                        <button type="button" className="ku-icon-right">
                          <div>
                            <AiOutlineRight />
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="ku-col-2">
                      <div className="div">
                        <span className="grade-text">ทั้งหมด</span>
                        &nbsp;
                        <span className="grade-number">1</span>
                        &nbsp;
                        <span className="grade-text">วิชา</span>
                      </div>
                    </div>
                  </div>
                  <hr className="mt-0 mb-1" />
                  <div className="ku-row">
                    <div className="ku-col-3">
                      <div className="ku-card">
                        <div className="ku-card-container">
                          <div className="ku-sun">
                            <div className="ku-row">
                              <div
                                style={{
                                  marginTop: 5 + "px",
                                  marginBottom: 5 + "px",
                                  minWidth: 100,
                                  paddingLeft: 5 + "px",
                                  paddingRight: 5 + "px",
                                }}
                              ></div>
                            </div>
                            <div className="ku-row">
                              <div
                                style={{
                                  marginTop: 5 + "px",
                                  marginBottom: 5 + "px",
                                  minWidth: 100,
                                  paddingLeft: 5 + "px",
                                  paddingRight: 5 + "px",
                                }}
                              >
                                <div>0:00 - 0:00</div>
                              </div>
                            </div>
                            <div className="ku-row">
                              <div
                                style={{
                                  marginTop: 5 + "px",
                                  marginBottom: 5 + "px",
                                  minWidth: 100,
                                  paddingLeft: 5 + "px",
                                  paddingRight: 5 + "px",
                                }}
                              >
                                <div>
                                  <BsFillChatLeftDotsFill />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="ku-sun-right">
                            <div className="ku-row">
                              <div className="cols1">
                                <div className="">01418490-60</div>
                              </div>
                              <div className="cols2">
                                <span>
                                  หมู่
                                  &nbsp;
                                  <span>201</span>
                                </span>
                              </div>
                              <div className="cols3">
                                <span className="text-center">ปฏิบัต</span>
                              </div>
                              <div className="cols4">
                                <div>สหกิจศึกษา</div>
                                <div>Cooperative Education</div>
                                <div>
                                  <div className="h-4"></div>
                                </div>
                                <div>
                                  <span className="bold">อ.ผู้สอน</span>
                                  &nbsp;
                                  <span>สุขุมาล กิติสิน </span>
                                  &nbsp;
                                </div>
                              </div>
                              <div className="cols5">
                                <div>
                                  <div>
                                    <span>ห้อง</span>
                                    &nbsp; Contact Teacher
                                  </div>
                                  <div>
                                    <span>ประเภทหมู่เรียน:</span>
                                    &nbsp;
                                    พิเศษ
                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="div2"><span className="grade-text">ทั้งหมด</span>
                        &nbsp;
                        <span className="grade-number">1</span>
                        &nbsp;
                        <span className="grade-text">วิชา</span></div>
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

export default Subject;
