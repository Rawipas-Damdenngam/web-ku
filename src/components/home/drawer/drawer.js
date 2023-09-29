import "./drawer.css";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { FaCalendarDays ,FaBookOpenReader ,FaDollarSign ,FaScroll } from "react-icons/fa6";
import {FaThList ,FaList} from "react-icons/fa";
import {IoAppsSharp} from "react-icons/io5";
import {RiGraduationCapFill} from "react-icons/ri";
import {MdAccountBox} from "react-icons/md";
import { useState, } from "react";
function Drawer() {
  const location = useLocation();
  const isPageActive = (page) => {
    return location.pathname === page;
  };
const [width , setWidth] = useState(true);

const handleDrawerOpen = () => {
  setWidth(!width);
  console.log(width);
}



  

  return (
    <nav className="">
      <div className={`ku-drawer-container ${width ? "": "close"}` }>
        <section className="ku-drawer-header-container">
          <div className="ku-person-icon-container">
            <div className="ku-person-icon-frame">
              <div className="text-4xl">
                <BsFillPersonFill />
              </div>
            </div>
          </div>

          <section className="ku-person-info-container">
            <div className="ku-person-info-name">รวิภาส ดำเด่นงาม</div>
            <div className="ku-person-info-status">นิสิตปัจจุบัน</div>
          </section>

          <div className="ku-menu-icon-container">
            <AiOutlineMenu onClick={handleDrawerOpen} className="ku-menu-icon" />
          </div>
        </section>
        <section className={`ku-drawer-items-text ${width ? "":"close"}`}>
          <div>
            
          </div>
          <Link to="/news" className="">
            <section
              className={`ku-drawer-items-container ${
                isPageActive("/news") ? "selected" : ""
              }`}
            >
              <div className="flex">
                <div className="ku-drawer-items-icon">
                  <div>
                    <FaCalendarDays />
                  </div>
                </div>

                <div className="">
                  <div className="ku-drawer-items-side-text">ข่าวสารนิสิต</div>
                </div>
              </div>
            </section>
          </Link>
          <Link to="/subject" className="">
            <section
              className={`ku-drawer-items-container ${
                isPageActive("/subject") ? "selected" : ""
              }`}
            >
              <div className="flex">
                <div className="ku-drawer-items-icon">
                  <div>
                    <FaBookOpenReader />
                  </div>
                </div>

                <div className="">
                  <div className="ku-drawer-items-side-text">
                    ตารางเรียน/ตารางสอบ
                  </div>
                </div>
              </div>
            </section>
          </Link>
          <Link to="/openRegister" className="">
            <section
              className={`ku-drawer-items-container ${
                isPageActive("/openRegister") ? "selected" : ""
              }`}
            >
              <div className="flex">
                <div className="ku-drawer-items-icon">
                  <div>
                    <IoAppsSharp />
                  </div>
                </div>

                <div className="">
                  <div className="ku-drawer-items-side-text">
                  วิชาที่เปิดให้ลงทะเบียน
                  </div>
                </div>
              </div>
            </section>
          </Link>
          <Link to="/finance" className="">
            <section
              className={`ku-drawer-items-container ${
                isPageActive("/finance") ? "selected" : ""
              }`}
            >
              <div className="flex">
                <div className="ku-drawer-items-icon">
                  <div>
                    <FaDollarSign />
                  </div>
                </div>

                <div className="">
                  <div className="ku-drawer-items-side-text">
                    เลือกรูปแบบการเงิน
                  </div>
                </div>
              </div>
            </section>
          </Link>
          <Link to="/enroll" className="">
            <section
              className={`ku-drawer-items-container ${
                isPageActive("/enroll") ? "selected" : ""
              }`}
            >
              <div className="flex">
                <div className="ku-drawer-items-icon">
                  <div>
                    <FaThList />
                  </div>
                </div>

                <div className="">
                  <div className="ku-drawer-items-side-text">
                    ลงทะเบียน/เพิ่ม-ถอน
                  </div>
                </div>
              </div>
            </section>
          </Link>
          <Link to="/enrollResult" className="">
            <section
              className={`ku-drawer-items-container ${
                isPageActive("/enrollResult") ? "selected" : ""
              }`}
            >
              <div className="flex">
                <div className="ku-drawer-items-icon">
                  <div>
                    <FaList />
                  </div>
                </div>

                <div className="">
                  <div className="ku-drawer-items-side-text">
                    ผลการลงทะเบียน
                  </div>
                </div>
              </div>
            </section>
          </Link>
          <Link to="/grade" className="">
            <section
              className={`ku-drawer-items-container ${
                isPageActive("/grade") ? "selected" : ""
              }`}
            >
              <div className="flex">
                <div className="ku-drawer-items-icon">
                  <div>
                    <RiGraduationCapFill />
                  </div>
                </div>

                <div className="">
                  <div className="ku-drawer-items-side-text">
                    ตรวจสอบผลการเรียน
                  </div>
                </div>
              </div>
            </section>
          </Link>
          <Link to="/enrollHistory" className="">
            <section
              className={`ku-drawer-items-container ${
                isPageActive("/enrollHistory") ? "selected" : ""
              }`}
            >
              <div className="flex">
                <div className="ku-drawer-items-icon">
                  <div>
                    <FaScroll />
                  </div>
                </div>

                <div className="">
                  <div className="ku-drawer-items-side-text">
                    ประวัติการลงทะเบียน
                  </div>
                </div>
              </div>
            </section>
          </Link>
          <Link to="/dashboard" className="">
            <section
              className={`ku-drawer-items-container ${
                isPageActive("/dashboard") ? "selected" : ""
              }`}
            >
              <div className="flex">
                <div className="ku-drawer-items-icon">
                  <div>
                    <IoAppsSharp />
                  </div>
                </div>

                <div className="">
                  <div className="ku-drawer-items-side-text">สถิติ</div>
                </div>
              </div>
            </section>
          </Link>
          <Link to="/profile" className="">
            <section
              className={`ku-drawer-items-container ${
                isPageActive("/profile") ? "selected" : ""
              }`}
            >
              <div className="flex">
                <div className="ku-drawer-items-icon">
                  <div>
                    <MdAccountBox />
                  </div>
                </div>

                <div className="">
                  <div className="ku-drawer-items-side-text">ประวัตินิสิต</div>
                </div>
              </div>
            </section>
          </Link>
        </section>
      </div>
    </nav>
  );
}

export default Drawer;
