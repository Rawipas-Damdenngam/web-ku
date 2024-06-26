import { useEffect, useState } from "react";
import { AiFillBell, AiFillHome, AiOutlineClose } from "react-icons/ai";
import { HiMiniChatBubbleLeftEllipsis } from "react-icons/hi2";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { LuFileSearch2 } from "react-icons/lu";
import { RiShutDownLine } from "react-icons/ri";
import User from "../../../data/raw_users";
import { subjects } from "../class/class";
import DrawerNew from "../drawer/drawer_new";
import Day from "../news/currentDay";
import Year from "../news/currentYear";
import "./openRegister.css";

function OpenRegister() {
  const me = User[1];
  const [inputValue, setInputValue] = useState("");
  const [updateSearch, setUpdateSearch] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [totalSeat, setTotalSeat] = useState(0);
  const [totalRegistered, setTotalRegistered] = useState(0);

  useEffect(() => {
    let totalSeat = 0;
    let totalRegistered = 0;
    if (selectedSubject !== null) {
      for (let i = 0; i < selectedSubject.sections.length; i++) {
        const section = selectedSubject.sections[i];
        totalSeat += parseInt(section.totalSeat);
        totalRegistered += parseInt(section.totalRegistered);
      }
    }
    setTotalSeat(totalSeat);
    setTotalRegistered(totalRegistered);
  }, [selectedSubject]);

  const handleClearInput = () => {
    setInputValue("");
    setUpdateSearch([]);
  };
  const [isShow, setIsShow] = useState(false);
  const handleShow = () => {
    setIsShow(!isShow);
  };

  function searchSubject(number) {
    const results = subjects.filter((subject) =>
      subject.subjectCode.includes(number)
    );
    console.log(results);
    return results;
  }
  function updateSubject(number) {
    setInputValue(number);
    setUpdateSearch(searchSubject(number));
  }

  function DisplayOpenRegister({ selectedSubject }) {
    // console.log(selectedSubject.sections);
    if (selectedSubject !== null) {
      return selectedSubject.sections.map((section) => {
        return (
          <div
            className="ku-card"
            key={section.sectionCode}
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
              className="ku-row cursor-pointer"
              style={{
                marginTop: 10 + "px",
                marginLeft: 5 + "px",
                marginRight: 5 + "px",
              }}
              onClick={handleShow}
            >
              <div className="ku-column-75">
                <div className="ku-row">
                  <section
                    className="flex ku-basis-1-12 items-center"
                    style={{
                      minWidth: 100 + "px",
                    }}
                  >
                    <span style={{ fontWeight: 600, fontSize: 12 + "px" }}>
                      {section.subjectCode}
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
                            {section.sectionCode}
                          </span>
                        </div>
                        <section className="flex">
                          <div>
                            <span className="ku-badge orange ">
                              {section.sectionTypeTh}
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
                        <span className="ku-text block">
                          {selectedSubject.credit} หน่วยกิต
                        </span>
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
                  style={{ marginTop: 5 + "px", marginBottom: 5 + "px" }}
                >
                  <div className="ku-row">
                    <div>
                      <div className="ku-text">
                        {selectedSubject.subjectNameTh}
                      </div>
                      <div className="ku-text">
                        {selectedSubject.subjectNameEn}
                      </div>
                      <div className="ku-text">
                        <span>ประเภทหมู่เรียน : </span>
                        {section.stdStatusTh}
                      </div>
                      <div className="ku-text">
                        <span style={{ color: "rgb(3 ,169 ,107)" }}>
                          สามารถเรียนทดแทนวิชา :{" "}
                        </span>
                        -
                      </div>
                    </div>
                    <div className="flex justify-center  px-3">
                      <span
                        className="ku-text inline-block"
                        style={{ alignSelf: "flex-start" }}
                      >
                        <span>
                          <span>{section.coursedate} </span>
                          <span
                            style={{
                              whiteSpace: "normal",
                              textAlign: "left",
                              color: "rgb(101,109,151)",
                              display: "inline-block",
                              lineHeight: 1.7,
                            }}
                          >
                            ห้อง {section.roomNameTh}
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
                        {section.totalSeat}
                        <p>จำนวนรับ</p>
                      </section>
                      <section className="qwerty col">
                        {section.totalRegistered}
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
            <div className={`${isShow ? "show" : "collapse"}`}>
              <hr className=" mt-2 mb-1 " />
            </div>

            <div
              className={`ku-row ${
                isShow ? "show" : "collapse"
              } my-2.5 mx-1.5  `}
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
                          {section.teacherName}
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
                      <section className="ku-text ku-basis-2-3 px-3">
                        {section.property}
                      </section>

                      <section></section>
                    </div>
                    <div className="ku-row">
                      <section className="ku-text ku-basis-2-6 px-3 block">
                        <div
                          style={{
                            color: "rgb(163,164,166)",
                            fontSize: 11.5 + "px",
                          }}
                        >
                          สาขาชั้นปีที่ไม่มีสิทธิ์
                        </div>
                      </section>
                      <section className="ku-text ku-basis-2-3 px-3">
                        <div>
                          {section.nonProperty ? section.nonProperty : "-"}
                        </div>
                      </section>

                      <section></section>
                    </div>
                  </section>
                  <section className="ku-basis-2-6 px-3">
                    <div className="ku-row mb-4">
                      <section className="ku-text ku-basis-2-6 px-3">
                        <div style={{ color: "rgb(163,164,166)" }}>
                          สอบกลางภาค
                        </div>
                      </section>
                      <section className="ku-text ku-basis-2-3 px-3">
                        <div>{section.midternDate}</div>
                      </section>
                    </div>
                    <div className="ku-row">
                      <section className="ku-text ku-basis-2-6 px-3">
                        <div style={{ color: "rgb(163,164,166)" }}>
                          สอบปลายภาค
                        </div>
                      </section>
                      <section className="ku-text ku-basis-2-3 px-3">
                        <div>{section.finalDate}</div>
                      </section>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        );
      });
    } else {
      return (
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
      );
    }
  }

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
                <div style={{ paddingBottom: 16 + "px" }}>
                  <div className="ku-welcome-container">
                    <div
                      style={{
                        paddingLeft: 12 + "px",
                        paddingRight: 12 + "px",
                      }}
                      className="ku-welcome-inner-left"
                    >
                      <div className="ku-welcome-text-box">
                        <div
                          style={{
                            marginRight: 24 + "px",
                            fontSize: 21 + "px",
                          }}
                        >
                          รายวิชาที่เปิดให้ลงทะเบียน
                        </div>
                        <div
                          style={{
                            marginTop: 16 + "px",
                            marginBottom: 24 + "px",
                          }}
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
                      marginBottom: 24 + "px",
                      marginLeft: -2 + "rem",
                      marginRight: -2 + "rem",
                    }}
                  />
                  <div className="ku-row">
                    <div className="ku-column-left">
                      <div>
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
                              <div style={{ position: "relative" }}>
                                <div style={{ position: "relative" }}>
                                  <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) =>
                                      updateSubject(e.target.value)
                                    }
                                    className="ku-input-main ku-form-control"
                                    placeholder="รหัสวิชา ,ชื่อวิชา"
                                  ></input>
                                  <div
                                    className={`ku-result-layout ${
                                      inputValue ? "" : "collapse"
                                    }`}
                                  >
                                    {updateSearch.map((results) => (
                                      <div
                                        className="ku-result-box"
                                        key={results.subjectCode}
                                      >
                                        <div
                                          className="ku-result-content"
                                          onClick={() => {
                                            setSelectedSubject(results);
                                            handleClearInput();
                                          }}
                                        >
                                          <div>{results.subjectCode}</div>
                                          <div>{results.subjectNameTh}</div>
                                          <div>{results.subjectNameEn}</div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
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
                        <div>
                          <div className="ku-row">
                            <div>
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
                        <span style={{ color: " rgb(94, 193, 212)" }}>
                          {totalSeat}
                        </span>
                        คน
                      </div>
                    </div>
                    <div className="ku-col-33">
                      <div style={{ fontSize: 17 + "px" }}>
                        ลงทะเบียนแล้วทั้งหมด: &nbsp;
                        <span style={{ color: " rgb(94, 193, 212)" }}>
                          {totalRegistered}
                        </span>
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
                <DisplayOpenRegister selectedSubject={selectedSubject} />
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
