import DrawerNew from "../drawer/drawer_new";
import Header from "../header/header";
import Day from "../news/currentDay";
import "./openRegister.css";
import { AiFillHome, AiOutlineClose, AiFillBell } from "react-icons/ai";
import { LuFileSearch2 } from "react-icons/lu";
import { RiShutDownLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

function OpenRegister() {
  const [inputValue, setInputValue] = useState("");
  const handleClearInput = () => {
    setInputValue("");
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
              <div>
                <div style={{ paddingBottom: 16 }} className="">
                  <div className="ku-welcome-container">
                    <div
                      style={{ paddingLeft: 12, paddingRight: 12 }}
                      className="ku-welcome-inner-left"
                    >
                      <div className="ku-welcome-text-box">
                        <div style={{ marginRight: 24, fontSize: 21 + "px" }}>
                          รายวิชาที่เปิดให้ลงทะเบียน
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
                      <div className="ku-welcome-body">
                        <button className="ku-home-button">
                          <AiFillHome />
                          &nbsp; กลับหน้าหลัก
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
                    <div className="ku-column-left">
                      <div className="">
                        <form>
                          <div className="ku-form-group">
                            <label className="ku-form-label">
                              <span>ค้นหารายวิชา</span>
                              <span
                                style={{ marginLeft: 4 + "px", color: "red" }}
                              >
                                *
                              </span>
                            </label>
                            <div className="ku-enroll-search ku-input-group">
                              <div
                                className=""
                                style={{ position: "relative" }}
                              >
                                <div style={{ position: "relative" }}>
                                  <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) =>
                                      setInputValue(e.target.value)
                                    }
                                    className="ku-input-main ku-form-control"
                                    placeholder="รหัสวิชา ,ชื่อวิชา"
                                  ></input>
                                  <div></div>
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={handleClearInput}
                                className="ku-clear-button ku-button-icon"
                              >
                                <span
                                  style={{
                                    font: 20 + "px",
                                    justifyContent: "center",
                                  }}
                                >
                                  <AiOutlineClose />
                                </span>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="ku-column-right">
                      <div className="ku-row">
                        <div className="ku-col-50">
                          <form
                            style={{
                              marginTop: 0.2 + "rem",
                              marginBottom: 0.5 + "rem",
                              display: "block",
                            }}
                          >
                            <div className="ku-form-group">
                              <label className="ku-form-label">
                                วิทยาเขต
                                <span
                                  style={{ marginLeft: 4 + "px", color: "red" }}
                                >
                                  *
                                </span>
                              </label>
                              <select className="ku-form-control ku-dropdown-toggle">
                                <option>บางเขน</option>
                                <option>สกลนคร</option>
                                <option>สถาบันสมทบ</option>
                                <option>กำแพงแสน</option>
                                <option>สุพรรณบุรี</option>
                                <option>ศรีราชา</option>
                              </select>
                            </div>
                          </form>
                        </div>
                        <div className="ku-col-33">
                          <form
                            style={{
                              marginTop: 0.2 + "rem",
                              marginBottom: 0.5 + "rem",
                            }}
                          >
                            <div className="ku-form-group">
                              <label className="ku-form-label">หมู่เรียน</label>
                              <div className="ku-input-group">
                                <input
                                  type="text"
                                  className="ku-form-control"
                                ></input>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ku-row">
                    <div className="ku-column-left">
                      <div className="ku-row">
                        <div className="">
                          <div className="ku-row">
                            <div className="">
                              <form>
                                <div className="ku-form-group">
                                  <label>
                                    <span>ปีการศึกษา</span>
                                    <span
                                      style={{
                                        marginLeft: 4 + "px",
                                        color: "red",
                                      }}
                                    >
                                      *
                                    </span>
                                  </label>
                                  <select className="ku-form-control">
                                    <option>2566</option>
                                    <option>2565</option>
                                    <option>2564</option>
                                    <option>2553</option>
                                    <option>2562</option>
                                  </select>
                                </div>
                              </form>
                            </div>
                            <div
                              className=""
                              style={{
                                paddingLeft: 0.75 + "rem",
                                paddingRight: 0.75 + "rem",
                              }}
                            >
                              <form>
                                <div className="ku-form-group">
                                  <label>
                                    <span>ภาคการศึกษา</span>
                                    <span
                                      style={{
                                        marginLeft: 4 + "px",
                                        color: "red",
                                      }}
                                    >
                                      *
                                    </span>
                                  </label>
                                  <select className="ku-form-control">
                                    <option>กรุณาเลือก</option>
                                    <option>ภาคต้น</option>
                                    <option>ภาคปลาย</option>
                                    <option>ภาคฤดูร้อน</option>
                                  </select>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ku-column flex items-center">
                      <div>
                        <div className="ku-row">
                          <div className="ku-column">
                            <form>
                              <div className="ku-form-group">
                                <label className="ku-form-label"></label>
                                <div>
                                  <a className="ku-button ku-button-info">
                                    รายวิชาที่เปิดสอนทั้งหมด
                                  </a>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="ku-row"
                    style={{
                      marginTop: 10 + "px",
                      marginBottom: 10 + "px",
                      justifyContent: "flex-end",
                    }}
                  >
                    <div
                      className=""
                      style={{
                        textAlign: "right",
                        maxWidth: 33.333 + "%",
                        paddingLeft: 0.75 + "rem",
                        paddingRight: 0.75 + "rem",
                      }}
                    >
                      <div style={{ fontSize: 12 + "px" }}>
                        <span className="ku-badge ku-badge-success ku-badge-header">
                          บางเขน
                        </span>
                        ทั้งหมด &nbsp;
                        <span style={{ color: " rgb(94, 193, 212)" }}>0</span>
                        &nbsp; หมู่
                      </div>
                    </div>
                  </div>
                  <div
                    className="ku-row"
                    style={{ marginTop: 10 + "px", marginBottom: 10 + "px" }}
                  >
                    <div className="ku-col-33">
                      <div style={{ fontSize: 17 + "px" }}>
                        จำนวนรับทั้งหมด: &nbsp;
                        <span style={{ color: " rgb(94, 193, 212)" }}>0</span>
                        คน
                      </div>
                    </div>
                    <div className="ku-col-33">
                      <div style={{ fontSize: 17 + "px" }}>
                        ลงทะเบียนแล้วทั้งหมด: &nbsp;
                        <span style={{ color: " rgb(94, 193, 212)" }}>0</span>
                        คน
                      </div>
                    </div>

                  </div>
                </div>
                <hr
                  style={{
                    marginTop: 0.25 + "rem",
                    marginBottom: 0.25 + "rem",
                  }}
                />
                <div className="ku-not-found-container">
                  <LuFileSearch2 style={{width:75+"px" ,height:74+"px" ,color:"skyblue"}}/>
                  <div className="ku-not-found-text">
                  หากต้องการค้นหารายวิชาที่เปิดให้ลงทะเบียน
                  <br/>
                  ให้ค้นหาจากรหัสวิชา ,ชื่อรายวิชา
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

export default OpenRegister;
