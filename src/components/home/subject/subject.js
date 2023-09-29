import Drawer from "../drawer/drawer";
import Header from "../header/header";
import Day from "../news/currentDay";
import {
  BsChevronLeft,
  BsChevronRight,
  BsFillChatLeftDotsFill,
} from "react-icons/bs";
import { BiRefresh } from "react-icons/bi";
import "./subject.css";
import { useState } from "react";

function Subject() {
  const [isClass1, setIsClass1] = useState(true);
  const [isClass2, setIsClass2] = useState(false);
  const [isClass3, setIsClass3] = useState(false);

  const handleClass1 = () => {
    setIsClass1(true);
    setIsClass2(false);
    setIsClass3(false);
  };
  const handleClass2 = () => {
    setIsClass1(false);
    setIsClass2(true);
    setIsClass3(false);
  };
  const handleClass3 = () => {
    setIsClass1(false);
    setIsClass2(false);
    setIsClass3(true);
  };
  return (
    <div className="ku-subject-screen">
      <Drawer />
      <Header />

      <section className="ku-subject-title-container">
        <section className="ku-subject-title-left">
          <div className="ku-subject-title">ตารางเรียน/ตารางสอบ</div>
          <div className="ku-subject-day ">
            <Day />
            <div className="ku-semeter text-xs ">ภาคต้น 2566</div>
          </div>
        </section>

        <section className="ku-subject-title-right">
          <button
            type="button"
            title="resync ข้อมูล"
            className="ku-refresh-icon"
          >
            <BiRefresh />
          </button>
        </section>
      </section>

      <section className="ku-subject-body">
        <div className="ku-subject-class-container grid grid-cols-3">
          <div className="ku-subject-class-layout text-xs">
            <button
              type="button"
              onClick={handleClass1}
              className={`ku-subject-class1 ${isClass1 ? "active" : ""}`}
            >
              ตารางเรียน
            </button>
            <button
              type="button"
              onClick={handleClass2}
              className={`ku-subject-class2 ${isClass2 ? "active" : ""}`}
            >
              สอบกลางภาค
            </button>
            <button
              type="button"
              onClick={handleClass3}
              className={`ku-subject-class3 ${isClass3 ? "active" : ""}`}
            >
              สอบปลายภาค
            </button>
          </div>
          <div className="ku-subject-day-layout">
            <div className="ku-subject-day-left">
              <BsChevronLeft />
            </div>
            <div className="ku-subject-day-mid">
              <div className="flex">26/06/2566 - 22/10/2566</div>
            </div>
            <div className="ku-subject-day-right">
              <BsChevronRight />
            </div>
          </div>
          <div className="ku-subject-number text-xs">
            <div className="ku-subject-number-container">
              <span>ทั้งหมด</span>
              &nbsp;
              <span className="text-blue-300">1</span>
              &nbsp;
              <span>วิชา</span>
            </div>
          </div>
        </div>
        <hr className="mb-1"></hr>
        <div className="ku-subject-card-container">
          <div className="ku-subject-card-time">
            <div className=" mt-2"></div>
            <div className="flex-col p-3 text-white">
              <div>00:00 - 00:00</div>
            </div>
            <div>
              <div className="text-white pl-3">
                <BsFillChatLeftDotsFill />
              </div>
            </div>
          </div>
          <div className="ku-subject-card-info">
            <div className="flex mt-0.5 ">
              <div className="grid grid-cols-12">
                <div className="col-span-2 text-xs font-bold min-width-100 ">
                  01418132-60
                </div>
                <div className="flex text-xs gap-1 max-width-50">
                  <div className="">หมู่</div>
                  <div className="text-green-500 pr-2">201</div>
                </div>
                <div className="pr-3.5">
                  <div className="text-xs active-frame ">ปฏิบัติ</div>
                </div>
                <div className="col-span-6 text-xs">
                  <div className="font-bold">สหกิจศึกษา</div>
                  <div>Coperative Education</div>
                  <div className="h-3.5"></div>
                  <div className="flex gap-1">
                    <span className="font-bold">อ.ผู้สอน</span>
                    <span>สุขุมาล กิติสิน </span>
                  </div>
                </div>
                <div className="col-span-2 text-xs pl-1 pr-2.5">
                  <div className="text-left">
                    <span className="font-bold">ห้อง</span>
                    &nbsp; Contact Teacher
                  </div>
                  <div className="">
                    <span className="font-bold">ประเภทหมู่เรียน :</span>
                    &nbsp; พิเศษ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ku-subject-footer">
        <footer>
          {" "}
          2023 © สำนักบริหารการศึกษา Kasetsart University © Build
          number:1.0.0002
        </footer>
      </section>
    </div>
  );
}
export default Subject;
