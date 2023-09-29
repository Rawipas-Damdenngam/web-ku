import "./news.css";
import { useState } from "react";
import Day from "./currentDay";
import { BsFillChatLeftDotsFill } from "react-icons/bs";

import Drawer from "../drawer/drawer";
import Header from "../header/header";
function News() {
  const [isSubject, setIsSubject] = useState(true);
  const [isNormal, setIsNormal] = useState(false);

  const handleSubjectClick = () => {
    setIsSubject(true);
    setIsNormal(false);
  };

  const handleNormalClick = () => {
    setIsSubject(false);
    setIsNormal(true);
  };

  return (
    <div className="ku-news-screen">
      <Drawer />
      <Header />


      <section className="ku-news-screen-container ">
        <section className="ku-header ">
          <div className="ku-welcome text-2xl">
            ยินดีต้อนรับเข้าสู่ระบบลงทะเบียนนิสิต
          </div>

          <section className="flex">
            <div className="ku-day">
              <Day />
            </div>
            <div className="ku-semeter text-xs">ภาคต้น 2566</div>
          </section>
        </section>

        <section className="ku-options flex">
          <button
            onClick={handleSubjectClick}
            className={isSubject ? "ku-subject-tap-selected" : "ku-subject-tap"}
          >
            รายวิชา
          </button>
          <button
            onClick={handleNormalClick}
            className={isNormal ? "ku-normal-tap-selected" : "ku-normal-tap"}
          >
            ทั่วไป
          </button>
        </section>
        <section className="ku-announce-container">
          <div className="ku-announce-header-container flex">
            <div className="ku-announce-icon">
              <div className="text-xl">
                <BsFillChatLeftDotsFill />
              </div>
            </div>

            <div className="text-xl pl-5">
              {isSubject ? "ประกาศรายวิชา" : "ประกาศทั่วไป"}
            </div>
          </div>
          <div className="ku-announce-body-container ">
            <div className="ku-announce-chat-icon text-7xl">
              <BsFillChatLeftDotsFill />
            </div>
            <div>ยังไม่มีประกาศรายวิชาจากอาจารย์ผู้สอน</div>
          </div>
        </section>
      </section>

      <section className="ku-footer-container">
        <footer className="ku-footer">
          2023 © สำนักบริหารการศึกษา Kasetsart University © Build
          number:1.0.0002
        </footer>
      </section>
    </div>
  );
}

export default News;
