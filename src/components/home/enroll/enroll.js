import DrawerNew from "../drawer/drawer_new";
import Day from "../news/currentDay";
import Year from "../news/currentYear";
import Subject from "../../../data/raw_subjects";
import User from "../../../data/raw_users";
import { AiFillHome, AiOutlineClose, AiFillBell } from "react-icons/ai";
import { LuFileSearch2 } from "react-icons/lu";
import { RiShutDownLine } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaFileCircleExclamation } from "react-icons/fa6";
import { BiSolidCalendarExclamation } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useEffect, useState, useContext } from "react";
import { subjects } from "../class/class";
import "./enroll.css";
import { SubjectContext } from "../../context/subject_context";

function Enroll() {
  const me = User[1];
  const [expand, setExpand] = useState(false);
  const [updateSearch, setUpdateSearch] = useState([]);
  const [registerSubject, setRegisterSubject] = useState([]);
  const [selectedRegisterSubject, setSelectedRegisterSubject] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [isShow, setIsShow] = useState(false);
  const [isLab, setIsLab] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const subjectContext = useContext(SubjectContext);
  const [selectSection, setSelectSeection] = useState(null);

  const addSubject = () => {
    subjectContext.addSubject(selectSection);
  };
  const deleteSubject = (subject) => {
    subjectContext.deleteSubject(subject);
  };

  const handleRegister = (section) => {
    setIsRegister(true);
    setSelectSeection(section);
  };

  const handleRegisterCancel = () => {
    setIsRegister(false);
  };

  const handleRegisterConfirm = (result) => {
    setIsRegister(false);
    setRegisterSubject([...registerSubject, result]);
  };

  const handleShow = () => {
    setIsShow(!isShow);
  };

  const handleExpand = () => {
    setExpand(!expand);
  };
  const [inputValue, setInputValue] = useState("");

  const handleClearInput = () => {
    setInputValue("");
  };
  const searchSubject = (number) => {
    const results = subjects.filter((subject) =>
      subject.subjectCode.includes(number)
    );
    console.log(results);
    return results;
  };
  const updateSubject = (number) => {
    setInputValue(number);
    setUpdateSearch(searchSubject(number));
  };

  const ShowRegisterConfirm = ({ isRegister }) => {
    if (isRegister) {
      return (
        <div className="ku-modal overlay">
          <div>
            <div className="ku-row" style={{ padding: 20 + "px" }}>
              <div>
                <span className="">ยืนยันการลงทะเบียน</span>
              </div>
              <div className="flex justify-end">
                <button
                  className=""
                  type="button"
                  onClick={handleRegisterCancel}
                >
                  X
                </button>
              </div>
            </div>
            <div>
              <hr />
              <div className="ku-column p-6">
                <label className="ku-row">เปลี่ยนประเภทการลงทะเบียน</label>
                <div className="py-2">
                  <select
                    className="ku-form-control ku-dropdown-toggle"
                    style={{ width: 220 + "px" }}
                  >
                    <option>Credit</option>
                    <option>Audit</option>
                  </select>
                </div>
              </div>
              <hr className="mb-1" />
              <div
                className="ku-row flex justify-end"
                style={{ padding: 20 + "px" }}
              >
                <button
                  className="ku-button-style ku-button-danger"
                  type="button"
                  onClick={handleRegisterCancel}
                  style={{ paddingLeft: 20 + "px", paddingRight: 20 + "px" }}
                >
                  ยกเลิก
                </button>
                <button
                  className="ku-button-style ku-button-primary"
                  type="button"
                  onClick={() => {
                    addSubject();
                    handleRegisterCancel();
                  }}
                  style={{ paddingLeft: 20 + "px", paddingRight: 20 + "px" }}
                >
                  ลงทะเบียน
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  const Backdrop = ({ isRegister }) => {
    if (isRegister) {
      return <div className="backdrop"></div>;
    }
  };

  const DisplayRegister = ({ selectedSubject }) => {
    if (selectedSubject !== null) {
      return selectedSubject.sections.map((section) => {
        return (
          <div
            className="ku-card justify-center"
            key={section.sectionId}
            style={{
              marginTop: 10 + "px",
              marginBottom: 10 + "px",
              minHeight: 80 + "px",
            }}
          >
            <div
              className="ku-row"
              style={{
                marginTop: 10 + "px",
                marginLeft: 5 + "px",
                marginRight: 5 + "px",
              }}
            >
              <div className="ku-column">
                <div className="ku-row">
                  <div className="ku-basis-5-6">
                    <div className="ku-row">
                      <section
                        className="flex items-center "
                        style={{
                          maxwidth: 120 + "px",
                          paddingLeft: 0.5 + "rem",
                          paddingRight: 0.5 + "rem",
                        }}
                      >
                        <div
                          className="flex flex-1  ku-text "
                          style={{ marginRight: 0.5 + "rem" }}
                        >
                          <div className="flex">
                            หมู่
                            <span
                              className="flex-1"
                              style={{
                                marginLeft: 0.5 + "rem",
                                color: "rgb(10, 187, 135)",
                              }}
                            >
                              {section.sectionCode}
                            </span>
                          </div>
                        </div>
                        {isLab ? (
                          <section className="flex">
                            <div>
                              <span className="ku-badge orange ">
                                {section.sectionTypeTh}
                              </span>
                            </div>
                          </section>
                        ) : (
                          <section className="flex">
                            <div>
                              <span className="ku-badge blue ">
                                {section.sectionTypeTh}
                              </span>
                            </div>
                          </section>
                        )}
                      </section>

                      <section
                        className="flex"
                        style={{
                          paddingLeft: 0.5 + "rem",
                          paddingRight: 0.5 + "rem",
                          minWidth: 120 + "px",
                        }}
                      >
                        <span className="ku-text block">
                          {section.maxCredit} หน่วยกิต
                        </span>
                        <span
                          className="block"
                          style={{ marginLeft: 1 + "rem" }}
                        ></span>
                      </section>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="ku-button-style ku-button-primary"
                      onClick={() => {
                        handleRegister(section);
                      }}
                      style={{
                        paddingLeft: 5 + "rem",
                        paddingRight: 5 + "rem",
                      }}
                    >
                      ลงทะเบียน
                    </button>
                  </div>
                  <div
                    className="flex ku-basis-1-12 justify-center items-center"
                    onClick={handleShow}
                  >
                    {isShow ? (
                      <IoIosArrowUp className="ku-cursor" />
                    ) : (
                      <IoIosArrowDown className="ku-cursor" />
                    )}
                  </div>
                </div>
                <section
                  className=""
                  style={{ marginTop: 5 + "px", marginBottom: 5 + "px" }}
                ></section>
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

                      <section className=""></section>
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

                      <section className=""></section>
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
      return <div></div>;
    }
  };

  const DisplaySuccess = () => {
    console.log(selectedRegisterSubject);
    console.log(subjectContext.subjects);
    if (selectSection !== null) {
      return subjectContext.subjects.map((section) => {
        return (
          <div
            key={section.sectionCode}
            className="ku-card"
            style={{ marginTop: 5 + "px" }}
          >
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
                <div>{section.subjectCode}</div>
                <div>Credit</div>
              </div>
              <div className="block  mt-1 mb-1 pr-3 pl-3 text-sm flex-1 w-64">
                <div>{section.subjectNameTh}</div>
                <div>{section.subjectNameEn}</div>
              </div>
              <div className="flex-1 text-sm block mt-1.5 mb-1 pl-3">
                <span>หมู่</span>
                &nbsp;
                <span>{section.sectionCode}</span>
                &nbsp;
              </div>
              <div className="flex-1 text-sm block mt-1.5 mb-1 pl-3">
                <span className="ku-badge orange">{section.sectionTypeTh}</span>
              </div>
              <div className="flex-1 text-sm block mt-1.5 mb-1 pl-3">
                <div>{section.maxCredit} หน่วยกิต</div>
              </div>
              <div className="flex-1 w-32 items-center justify-center">
                <button
                  className=" ku-button-style ku-button-danger  "
                  type="button"
                  onClick={() => {deleteSubject(section)}}
                  style={{ paddingLeft: 5 + "rem", paddingRight: 5 + "rem" }}
                >
                  ถอน
                </button>
              </div>
              <div className="flex-1 text-sm flex item-center justify-center ">
                <div className="flex justify-end items-center">
                  <IoIosArrowDown />
                </div>
              </div>
            </div>
            {/* <div className="ku-row">2</div> */}
          </div>
        );
      });
    } else {
      return <div>ไม่พบรายวิชาที่ลงทะเบียน</div>;
    }
  };

  return (
    <div className="ku-layout-wrapper">
      <div>
        <Backdrop isRegister={isRegister} />
      </div>
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
                      <div className="">
                        <ShowRegisterConfirm isRegister={isRegister} />
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
                <div className="ku-text ku-row px-3">
                  ค้นหารายวิชาเพื่อลงทะเบียน
                </div>
                <div className="ku-card" style={{ position: "relative" }}>
                  <div style={{ position: "relative" }}>
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => updateSubject(e.target.value)}
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

                <div className="">
                  <DisplayRegister selectedSubject={selectedSubject} />
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
                  <DisplaySuccess
                    selectedRegisterSubject={selectedRegisterSubject}
                  />
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
