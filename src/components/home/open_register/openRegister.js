import DrawerNew from "../drawer/drawer_new";
import Day from "../news/currentDay";
import "./openRegister.css";
import { AiFillHome, AiOutlineClose, AiFillBell } from "react-icons/ai";
import { LuFileSearch2 } from "react-icons/lu";
import { RiShutDownLine } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { HiMiniChatBubbleLeftEllipsis } from "react-icons/hi2";
import { useState } from "react";

function OpenRegister() {
  const [inputValue, setInputValue] = useState("");
  const handleClearInput = () => {
    setInputValue("");
  };
  const [isShow, setIsShow] = useState(false);
  const handleShow = () => {
    setIsShow(!isShow);
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
                  <LuFileSearch2
                    style={{
                      width: 75 + "px",
                      height: 74 + "px",
                      color: "skyblue",
                    }}
                  />
                  <div className="ku-not-found-text">
                    หากต้องการค้นหารายวิชาที่เปิดให้ลงทะเบียน
                    <br />
                    ให้ค้นหาจากรหัสวิชา ,ชื่อรายวิชา
                  </div>
                </div>
                <div
                  className="ku-card"
                  style={{ marginTop: 10 + "px", marginBottom: 10 + "px" }}
                >
                  <div
                    style={{
                      height: 4 + "px",
                      background: "grey",
                      opacity: 0.5,
                      borderTopLeftRadius: 5 + "px",
                      borderTopRightRadius: 5 + "px",
                    }}
                  ></div>
                  <div
                    className="ku-row"
                    style={{
                      marginTop: 10 + "px",
                      marginLeft: 5 + "px",
                      marginRight: 5 + "px",
                    }}
                  >
                    <div className="ku-column-75">
                      <div className="ku-row">
                        <section
                          className="flex ku-basis-1-12 items-center"
                          style={{
                            minWidth: 100 + "px",
                          }}
                        >
                          <span
                            style={{ fontWeight: 600, fontSize: 12 + "px" }}
                          >
                            01418101-64
                          </span>
                        </section>
                        <div className="ku-basis-5-6">
                          <div className="ku-row">
                            <section
                              className="flex items-center"
                              style={{
                                maxwidth: 120 + "px",
                                paddingLeft: 0.5 + "rem",
                                paddingRight: 0.5 + "rem",
                              }}
                            >
                              <div
                                className="flex ku-text"
                                style={{ marginRight: 0.5 + "rem" }}
                              >
                                <div className="flex">หมู่</div>
                                <span style={{ marginLeft: 0.5 + "rem" }}>
                                  11
                                </span>
                              </div>
                              <section className="flex">
                                <div>
                                  <span className="ku-badge orange ">
                                    ปฏิบัติ
                                  </span>
                                </div>
                              </section>
                            </section>
                            <section
                              className="flex items-center"
                              style={{
                                paddingLeft: 0.5 + "rem",
                                paddingRight: 0.5 + "rem",
                              }}
                            >
                              <span className="ku-text block">1 หน่วยกิต</span>
                              <span
                                className="block"
                                style={{ marginLeft: 1 + "rem" }}
                              >
                                <span>
                                  <div>
                                    <HiMiniChatBubbleLeftEllipsis
                                      style={{
                                        color: "rgb(3 ,169 ,107)",
                                        fontSize: 20 + "px",
                                      }}
                                    />
                                  </div>
                                </span>
                              </span>
                              <span></span>
                            </section>
                            <div></div>
                          </div>
                        </div>
                        <div></div>
                      </div>
                      <section
                        className=""
                        style={{ marginTop: 5 + "px", marginBottom: 5 + "px" }}
                      >
                        <div className="ku-row">
                          <div>
                            <div className="ku-text">การใช้งานคอมพิวเตอร์</div>
                            <div className="ku-text">Computer Applications</div>
                            <div className="ku-text">
                              <span>ประเภทหมู่เรียน : </span>ปกติ
                            </div>
                            <div className="ku-text">
                              <span style={{ color: "rgb(3 ,169 ,107)" }}>
                                สามารถเรียนทดแทนวิชา :{" "}
                              </span>
                              -
                            </div>
                          </div>
                          <div className="flex justify-center px-3">
                            <span className="ku-text inline-block">
                              <span>
                                <span>THU 13:00 - 15:00 </span>
                                <span
                                  style={{
                                    whiteSpace: "normal",
                                    textAlign: "left",
                                    color: "rgb(101,109,151)",
                                    display: "inline-block",
                                    lineHeight: 1.7,
                                  }}
                                >
                                  ห้อง ONLINE
                                </span>
                                <br />
                              </span>
                            </span>
                          </div>
                        </div>
                      </section>
                    </div>
                    <div className="ku-column-25 px-3">
                      <div className="ku-row justify-start">
                        <section
                          className="ku-basis-5-6 flex"
                          style={{
                            alignSelf: "center",
                            marginTop: 5 + "px",
                            marginBottom: 5 + "px",
                          }}
                        >
                          <div className="ku-row">
                            <section className="qwerty col">
                              55
                              <p>จำนวนรับ</p>
                            </section>
                            <section className="qwerty col">
                              38
                              <p>ลงทะเบียนแล้ว</p>
                            </section>
                          </div>
                        </section>
                        <section className="ku-cursor  my-1.5 arrow  ">
                          <div className="mt-2.5">
                            <div onClick={handleShow}>
                              {isShow ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                  <div className={`collapse${isShow ? "show" : ""}`}>
                    <hr className=" mt-2 mb-1 " />
                  </div>

                  <div
                    className={`ku-row collapse my-2.5 mx-1.5 ${
                      isShow ? "show" : ""
                    } `}
                  >
                    <div className="basis-0 grow ">
                      <div className="ku-row my-0.5">
                        <section className="ku-basis-2-6 px-3">
                          <div className="ku-row mb-1">
                            <section>
                              <div
                                className="ku-text ku-basis-1-4 pr-0"
                                style={{ color: "rgb(163,164,166)" }}
                              >
                                อาจารย์ผู้สอน
                              </div>
                            </section>
                            <section>
                              <div className="ku-text px-3">
                                สุนทรี คุ้มไพโรจน์
                              </div>
                            </section>
                          </div>
                        </section>
                        <section className="ku-basis-2-6 px-3">
                          <div className="ku-row mb-4">
                            <section
                              className="ku-text ku-basis-2-6 px-3"
                              style={{ color: "rgb(163,164,166)" }}
                            >
                              สาขาชั้นปีที่มีสิทธิ์
                            </section>
                            <section
                              className="ku-text ku-basis-2-3 px-3"
                              style={{ color: "rgb(163,164,166)" }}
                            >
                              -
                            </section>

                            <section className=""></section>
                          </div>
                          <div className="ku-row">
                            <section className="ku-text ku-basis-2-6 px-3">
                              <div style={{ color: "rgb(163,164,166)" }}>
                                สาขาชั้นปีที่ไม่มีสิทธิ์
                              </div>
                            </section>
                            <section className="ku-text ku-basis-2-3 px-3">
                              <div style={{ color: "rgb(163,164,166)" }}>-</div>
                            </section>

                            <section className=""></section>
                          </div>
                        </section>
                        <section className="ku-basis-2-6 px-3">3</section>
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

export default OpenRegister;
