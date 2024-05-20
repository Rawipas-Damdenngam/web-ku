import { AiFillBell } from "react-icons/ai";
import { BiSolidCalendarExclamation } from "react-icons/bi";
import { FaFileCircleExclamation } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { RiShutDownLine } from "react-icons/ri";
import User from "../../../data/raw_users";
import DrawerNew from "../drawer/drawer_new";
import Day from "../news/currentDay";
import Year from "../news/currentYear";
import "./finance.css";
function Finance() {
  const me = User[1];
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
                <div style={{}}>
                  <div className="ku-welcome-container">
                    <div
                      style={{ paddingLeft: 12, paddingRight: 12 }}
                      className="ku-welcome-inner-left"
                    >
                      <div className="ku-welcome-text-box">
                        <div style={{ marginRight: 24, fontSize: 21 + "px" }}>
                          การเงินนิสิต
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

                <div
                  className="flex items-center"
                  style={{
                    marginBottom: 0.8 + "rem",
                    paddingLeft: 12 + "px",
                    paddingRight: 12 + "px",
                  }}
                >
                  <div>
                    <div className="ku-choose-finance flex items-center">
                      <button>เลือกรูปแบบ</button>
                      <button>การเงิน</button>
                    </div>
                  </div>
                  <div className="ku-v-hairLine"></div>
                  <div className="ku-show-charge">
                    <FaFileCircleExclamation
                      style={{
                        width: 100 + "%",
                        height: 39 + "px",
                        color: "grey",
                      }}
                    />
                  </div>
                </div>
                <hr
                  style={{
                    marginBottom: 24,
                    marginLeft: -2 + "rem",
                    marginRight: -2 + "rem",
                  }}
                />

                <div className="ku-not-found-container">
                  <BiSolidCalendarExclamation
                    style={{
                      width: 75 + "px",
                      height: 74 + "px",
                      color: "grey",
                    }}
                  />
                  <div className="ku-not-found-text">
                    ไม่พบปฎิทินการศึกษาตามกำหนดการ
                    <br />
                    ของวันเลือกประเภทการลงทะเบียนและชำระเงิน
                    <br />
                    กรุณาติดต่อเจ้าหน้าที่สำนักบริหารการศึกษา
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
export default Finance;
