import DrawerNew from "../drawer/drawer_new";
import Day from "../news/currentDay";
import Year from "../news/currentYear";
import { AiFillHome, AiOutlineClose, AiFillBell } from "react-icons/ai";
import { LuFileSearch2 } from "react-icons/lu";
import { RiShutDownLine } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaFileCircleExclamation } from "react-icons/fa6";
import { BiSolidCalendarExclamation } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useState } from "react";
import "./enroll.css";
function Enroll() {
  const [expand, setExpand] = useState(false);
  const handleExpand = () => {
    setExpand(!expand);
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
              <div style={{ height: 80 + "%" }}>
                <div style={{}} className="">
                  <div className="ku-welcome-container">
                    <div
                      style={{ paddingLeft: 12, paddingRight: 12 }}
                      className="ku-welcome-inner-left"
                    >
                      <div className="ku-welcome-text-box">
                        <div style={{ marginRight: 24, fontSize: 21 + "px" }}>
                          ลงทะเบียนเรียน
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
                      <div className="ku-welcome-body"></div>
                    </div>
                  </div>
                </div>

                <hr
                  style={{
                    marginBottom: 24,
                    marginLeft: -2 + "rem",
                    marginRight: -2 + "rem",
                  }}
                />

                <div className="ku-card" style={{ padding: 20 + "px" }}>
                  <div
                    className="ku-row items-center "
                    style={{ height: 50 + "px" }}
                  >
                    <div
                      className="flex basis-full grow max-w-full items-center justify-center"
                      style={{ fontSize: 14 + "px" }}
                    >
                      <i
                        className="ku-outline-warning"
                        style={{ fontSize: 32 + "px" }}
                      >
                        <AiOutlineInfoCircle />
                      </i>
                      &nbsp;ไม่อยู่ในกำหนดการลงทะเบียน
                    </div>
                  </div>
                </div>
                <div className="ku-row px-3">
                  <div>
                    <span className="ku-text">รายวิชาที่รอการชำระเงิน</span>
                  </div>
                  <div className="flex justify-end ku-text">
                    ทั้งหมด &nbsp;
                    <span style={{ color: " rgb(94, 193, 212)" }}>0</span>
                    &nbsp;วิชา &nbsp;
                    <span style={{ color: " rgb(94, 193, 212)" }}>0</span>
                    &nbsp;หน่วยกิต
                  </div>
                </div>

                <div className="ku-card">
                  <div className="ku-row " style={{ height: 50 + "px" }}>
                    <div className="flex ku-text justify-center">
                      ไม่พบรายวิชาที่รอการชำระเงิน
                    </div>
                  </div>
                </div>
                <div className="ku-row px-3">
                  <div>
                    <span className="ku-text">รายวิชาที่ลงทะเบียนสำเร็จ</span>
                  </div>
                  <div className="flex ku-text justify-end">
                    รวม &nbsp;
                    <span style={{ color: "rgb(94,193,212)" }}>3</span>
                    &nbsp;วิชา &nbsp;
                    <span style={{ color: "rgb(94,193,212)" }}>9</span>
                    &nbsp;หน่วยกิต
                  </div>
                </div>
                <div className="ku-card">
                  <div
                    style={{
                      height: 4 + "px",
                      background: "rgb(10,187,135)",
                      borderTopLeftRadius: 5 + "px",
                      borderTopRightRadius: 5 + "px",
                    }}
                  ></div>
                  <div className="ku-row my-2.5 mx-1.5">
                    <section className="ku-basis-1-12 ku-column pl-0 pr-0 my-1.5 text-center self-center">
                      <div className="ku-text ">01418441-60</div>
                      <div className="ku-text text-center">Credit</div>
                    </section>
                    <section className="ku-basis-5-12 my-1.5 ku-column self-center ">
                      <div className="ku-text">
                        การจัดการมิติข้อมูลและรายงานทางธุรกิจ
                      </div>
                      <div className="ku-text">
                        Business Data Dimension and Report Management
                      </div>
                    </section>
                    <section className="ku-basis-1-12 mt-2 mb-1.5 ku-column pr-0 ku-text">
                      <span>หมู่</span>
                      &nbsp;
                      <span style={{ color: "rgb(10,187,135)" }}>200</span>
                      <div className="mt-1.5">
                        <span>หมู่</span>
                        &nbsp;
                        <span style={{ color: "rgb(10,187,135)" }}>200</span>
                        &nbsp;
                      </div>
                    </section>
                    <section className="ku-basis-1-12 my-1.5 ku-column pr-0">
                      <span className="ku-badge blue ku-badge-pill">
                        บรรยาย
                      </span>
                      <div>
                        <span className="ku-badge orange ku-badge-pill">
                          ปฏิบัติ
                        </span>
                      </div>
                    </section>
                    <section className="ku-basis-1-12 mt-2 mb-1.5">
                      <div className="text-center ku-text">2 หน่วยกิต</div>
                      <div className="text-center ku-text mt-1.5">
                        1 หน่วยกิต
                      </div>
                    </section>
                    <section className="flex ku-basis-2-12 my-1.5 ku-column items-center">
                      <button
                        className="w-full ku-button button-danger items-center"
                        type="button"
                      >
                        ถอน
                      </button>
                    </section>
                    <section className="flex flex-1 max-w-12 my-1.5 mr-3 ">
                      <div
                        className="flex flex-1 justify-end items-center"
                        style={{ width: 50 + "px", height: 50 + "px" }}
                        onClick={handleExpand}
                      >
                        {expand ? (
                          <IoIosArrowDown className="ku-cursor" />
                        ) : (
                          <IoIosArrowUp className="ku-cursor" />
                        )}
                      </div>
                    </section>
                  </div>
                  <div className={`${expand ? "show" : "collapse"} `}>
                    <hr className="mt-2 mb-1"></hr>
                    <div className="ku-row flex my-2.5 mx-1.5">
                      <section className="ku-column pl-0">
                        <div className="ku-row mb-2">
                          <section className="ku-column">
                            <div className="ku-row">
                              <section className="ku-col-33 pl-0 mb-3">
                                <div className="ku-row ku-text my-0.5">
                                  <section className="ku-column ku-basis-1-4 pl-0">
                                    <span className="ku-badge ku-badge-pill blue">
                                      บรรยาย
                                    </span>
                                  </section>
                                  <section className="ku-column ku-basis-3-4 pl-0">
                                    <div className="ku-row">
                                      <section
                                        className="ku-basis-5-12 ku-column pl-0"
                                        style={{ minWidth: 120 + "px" }}
                                      >
                                        <div className="ku-text">
                                          Sat 11:00 - 13:00
                                        </div>
                                      </section>
                                      <section className="ku-basis-5-12 ku-column">
                                        <div>SC45 - 708</div>
                                      </section>
                                    </div>
                                  </section>
                                </div>
                              </section>
                              <section className="ku-col-33 mb-3">
                                <div className="ku-row ku-text mb-0.5">
                                  <section
                                    className="ku-column ku-basis-2-12 ku-text my-0.5"
                                    style={{
                                      minWidth: 100 + "px",
                                      color: "grey",
                                    }}
                                  >
                                    <div>อาจารย์ผู้สอน</div>
                                  </section>
                                  <section className="p-0 ku-column ku-basis-7-12">
                                    <div
                                      className="ku-text my-0.5
                                    "
                                    >
                                      <span className="d-inline-block">
                                        พบสิทธิ์ กมลเวชช &nbsp;
                                      </span>
                                    </div>
                                  </section>
                                </div>
                              </section>
                              <section className="ku-col-33 mb-3">
                                <div className="ku-row mb-0.5">
                                  <section
                                    className="ku-text my-0.5"
                                    style={{
                                      minWidth: 100 + "px",
                                      color: "grey",
                                    }}
                                  >
                                    <div>สอบกลางภาค</div>
                                  </section>
                                  <section className="ku-text p-0 my-0.5">
                                    <div>-</div>
                                  </section>
                                </div>
                                <div className="ku-row mb-0.5">
                                  {" "}
                                  <section
                                    className="ku-text my-0.5"
                                    style={{
                                      minWidth: 100 + "px",
                                      color: "grey",
                                    }}
                                  >
                                    <div>สอบปลายภาค</div>
                                  </section>
                                  <section className="ku-text p-0 my-0.5">
                                    <div>-</div>
                                  </section>
                                </div>
                              </section>
                            </div>
                          </section>
                        </div>
                        <div className="ku-row">
                          <section className="ku-column">
                            <div className="ku-row">
                              <section className="ku-col-33 pl-0 mb-3">
                                <div className="ku-row ku-text my-0.5">
                                  <section className="ku-column ku-basis-1-4 pl-0">
                                    <span className="ku-badge ku-badge-pill orange">
                                      ปฏิบัติ
                                    </span>
                                  </section>
                                  <section className="ku-column ku-basis-3-4 pl-0">
                                    <div className="ku-row">
                                      <section
                                        className="ku-basis-5-12 ku-column pl-0"
                                        style={{ minWidth: 120 + "px" }}
                                      >
                                        <div className="ku-text">
                                          Sat 13:00 - 15:00
                                        </div>
                                      </section>
                                      <section className="ku-basis-5-12 ku-column">
                                        <div>SC45 - 708</div>
                                      </section>
                                    </div>
                                  </section>
                                </div>
                              </section>
                              <section className="ku-col-33 mb-3">
                                <div className="ku-row ku-text mb-0.5">
                                  <section
                                    className="ku-column ku-basis-2-12 ku-text my-0.5"
                                    style={{
                                      minWidth: 100 + "px",
                                      color: "grey",
                                    }}
                                  >
                                    <div>อาจารย์ผู้สอน</div>
                                  </section>
                                  <section className="p-0 ku-column ku-basis-7-12">
                                    <div
                                      className="ku-text my-0.5
                                    "
                                    >
                                      <span className="d-inline-block">
                                        พบสิทธิ์ กมลเวชช &nbsp;
                                      </span>
                                    </div>
                                  </section>
                                </div>
                              </section>
                              <section className="ku-col-33 mb-3">
                                <div className="ku-row mb-0.5">
                                  <section
                                    className="ku-text my-0.5"
                                    style={{
                                      minWidth: 100 + "px",
                                      color: "grey",
                                    }}
                                  >
                                    <div>สอบกลางภาค</div>
                                  </section>
                                  <section className="ku-text p-0 my-0.5">
                                    <div>-</div>
                                  </section>
                                </div>
                                <div className="ku-row mb-0.5">
                                  {" "}
                                  <section
                                    className="ku-text my-0.5"
                                    style={{
                                      minWidth: 100 + "px",
                                      color: "grey",
                                    }}
                                  >
                                    <div>สอบปลายภาค</div>
                                  </section>
                                  <section className="ku-text p-0 my-0.5">
                                    <div>-</div>
                                  </section>
                                </div>
                              </section>
                            </div>
                          </section>
                        </div>
                      </section>
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
export default Enroll;
