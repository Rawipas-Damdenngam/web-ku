import DrawerNew from "../drawer/drawer_new";
import Day from "../news/currentDay";
import { AiFillHome, AiOutlineClose, AiFillBell } from "react-icons/ai";
import { LuFileSearch2 } from "react-icons/lu";
import { RiShutDownLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { FaFileCircleExclamation } from "react-icons/fa6";
import { BiSolidCalendarExclamation } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useState } from "react";
import "./enrollResult.css";
function EnrollResult() {
  const greenText = {
    color: "rgb(10,187,135)",
  };
  const [isSuccess, setIsSuccess] = useState(true);
  const [isWarning, setIsWarning] = useState(false);
  const [isDanger, setIsDanger] = useState(false);
  const [isAll, setIsAll] = useState(false);

  const handleSuccess = () => {
    setIsSuccess(true);
    setIsWarning(false);
    setIsDanger(false);
    setIsAll(false);
  };
  const handleWarning = () => {
    setIsSuccess(false);
    setIsWarning(true);
    setIsDanger(false);
    setIsAll(false);
  };
  const handleDanger = () => {
    setIsSuccess(false);
    setIsWarning(false);
    setIsDanger(true);
    setIsAll(false);
  };
  const handleAll = () => {
    setIsSuccess(false);
    setIsWarning(false);
    setIsDanger(false);
    setIsAll(true);
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
                          ผลการลงทะเบียน
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

                <div className="ku-row">
                  <section className="ku-cols left">
                    <div>
                      <div
                        className="flex"
                        style={{
                          paddingTop: 8 + "px",
                          paddingBottom: 24 + "px",
                        }}
                      >
                        <button
                          type="button"
                          onClick={handleSuccess}
                          className={`ku-button ${
                            isSuccess ? "ku-button-success" : ""
                          } ku-button-style`}
                        >
                          สำเร็จ
                        </button>
                        <button
                          type="button"
                          onClick={handleWarning}
                          className={`ku-button ${
                            isWarning ? "ku-button-warning" : ""
                          } ku-button-style`}
                        >
                          รอพิจารณา
                        </button>
                        <button
                          type="button"
                          onClick={handleDanger}
                          className={`ku-button ${
                            isDanger ? "ku-button-danger" : ""
                          } ku-button-style`}
                        >
                          ไม่เห็นชอบ
                        </button>
                        <button
                          type="button"
                          onClick={handleAll}
                          className={`ku-button ${
                            isAll ? "ku-button-primary" : ""
                          } ku-button-style`}
                        >
                          ทั้งหมด
                        </button>
                      </div>
                      <div className="flex">
                        <div>
                          <span className="ku-badge-blue">ภาคต้น 2566</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <hr className="mt-2 mb-1" />
                      <div className="flex py-3">
                        <div>
                          <span style={{ fontSize: 0.75 + "rem" }}>
                            รายวิชาที่ลงทะเบียนสำเร็จ
                          </span>
                        </div>
                        <div className="flex-1 text-end">
                          <span className="ku-grade-text">รวม</span>
                          <span className="ku-grade-number"> 1 </span>
                          <span className="ku-grade-text">วิชา</span>
                          <span className="ku-grade-number"> 6 </span>
                          <span className="ku-grade-text">หน่วยกิต</span>
                        </div>
                      </div>
                      <div className="ku-card" style={{ marginTop: 5 + "px" }}>
                        <div className="ku-green-line"></div>
                        <div
                          className="ku-row"
                          style={{
                            marginTop: 10 + "px",
                            marginBottom: 10 + "px",
                            marginLeft: 5 + "px",
                            marginRight: 5 + "px",
                          }}
                        >
                          <div
                            className="block mt-1 mb-1 flex-1 text-sm"
                            style={{
                              textAlign: "center",
                              minWidth: 100 + "px",
                              maxWidth: 8.333 + "%",
                            }}
                          >
                            <div>01418490-60</div>
                            <div>Credit</div>
                          </div>
                          <div className="block mt-1 mb-1 pr-3 pl-3 text-sm flex-1 w-64">
                            <div>สหกิจศึกษา</div>
                            <div>Cooperative Education</div>
                          </div>
                          <div className="flex-1 text-sm block mt-1.5 mb-1 pl-3">
                            <span>หมู่</span>
                            &nbsp;
                            <span style={greenText}>201</span>
                            &nbsp;
                          </div>
                          <div className="flex-1 text-sm block mt-1.5 mb-1 pl-3">
                            <span className="ku-badge orange">ปฏิบัติ</span>
                          </div>
                          <div className="flex-1 text-sm block mt-1.5 mb-1 pl-3">
                            <div>6 หน่วยกิต</div>
                          </div>
                          <div className="flex-1 w-32"></div>
                          <div className="flex-1 text-sm flex item-center justify-center ">
                            <div className="flex items-center">
                              <IoIosArrowDown />
                            </div>
                          </div>
                        </div>
                        {/* <div className="ku-row">2</div> */}
                      </div>
                    </div>
                  </section>
                  <section
                    className="ku-cols right hidden xl:block"
                    style={{
                      paddingTop: 32 + "px",
                      paddingLeft: 22 + "px",
                    }}
                  >
                    <div
                      className=""
                      style={{
                        padding: 16 + "px",
                        width: 300 + "px",
                        borderColor: "transparent",
                        backgroundColor: "white",
                      }}
                    >
                      <div>
                        <p>ปีการศึกษา</p>
                        <div className="ku-row pr-2">
                          <div className="ku-col-33">
                            <button
                              type="button"
                              className="ku-button secondary-filter m-1"
                            >
                              2566
                            </button>
                          </div>
                          <div className="ku-col-33">
                            <button
                              type="button"
                              className="ku-button secondary-filter m-1"
                            >
                              2565
                            </button>
                          </div>
                          <div className="ku-col-33">
                            <button
                              type="button"
                              className="ku-button secondary-filter m-1"
                            >
                              2564
                            </button>
                          </div>
                          <div className="ku-col-33">
                            <button
                              type="button"
                              className="ku-button secondary-filter m-1"
                            >
                              2563
                            </button>
                          </div>
                          <div className="ku-col-33">
                            <button
                              type="button"
                              className="ku-button secondary-filter m-1"
                            >
                              2562
                            </button>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div>2</div>
                      <hr />
                      <div>3</div>
                      <hr />
                      <div>4</div>
                    </div>
                  </section>
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
export default EnrollResult;
