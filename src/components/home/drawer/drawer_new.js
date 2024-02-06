import Subject from "../../../data/raw_subjects";
import User from "../../../data/raw_users";
import { Link, ScrollRestoration, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import {
  BsFillChatLeftDotsFill,
  BsPersonCircle,
  BsGrid3X3GapFill,
} from "react-icons/bs";
import { AiOutlineMenu, AiFillBell } from "react-icons/ai";
import { BiSolidCalendar, BiSolidBookReader } from "react-icons/bi";
import { RiShutDownLine, RiGraduationCapFill } from "react-icons/ri";
import { FaDollarSign, FaThList, FaListUl, FaScroll } from "react-icons/fa";
import { MdAccountBox } from "react-icons/md";
import "./drawer_new.css";
import { DrawerContext } from "../../context/drawer_context";

function Drawer_new() {
  const drawerContext = useContext(DrawerContext);
  const isDrawerOpen = drawerContext.isDrawerOpen;

  const location = useLocation();

  const isPageActive = (page) => {
    return location.pathname === page;
  };

  const handleDrawerOpen = () => {
    drawerContext.handleToggleDrawer();
  };
  const me = User[1]
  return (
    <nav className={`ku-side-bar ${isDrawerOpen ? "" : "close"}`}>
      <div className="ku-side-bar-header">
        <div className="one">
          <BsPersonCircle className="icon" />
        </div>
        <div className="four">
          <div className="text-container">
            <div className="ku-name">{me.firstNameTh} {me.lastNameTh}</div>
            <div className="ku-status">{me.student.studentTypeNameTh}</div>
          </div>
        </div>
        <div className="two">
          <AiOutlineMenu className="icon" onClick={handleDrawerOpen} />
        </div>
      </div>
      <hr className="mt-0" />
      <div className="ku-side-bar-inner">
        <div
          className={`ku-side-bar-items ${
            isPageActive("/news") ? "selected" : ""
          }`}
        >
          <Link to="/news" className="ku-link">
            <div className="ku-side-bar-icon-container">
              <BiSolidCalendar className="size" />
            </div>
            <div className="ku-side-bar-info-container">
              <div className={`ku-info-text ${isDrawerOpen ? "" : "close"}`}>
                ข่าวสารนิสิต
              </div>
            </div>
          </Link>
        </div>
        <div
          className={`ku-side-bar-items ${
            isPageActive("/subject") ? "selected" : ""
          }`}
        >
          <Link to="/subject" className="ku-link">
            <div className="ku-side-bar-icon-container">
              <BiSolidBookReader className="size" />
            </div>
            <div className="ku-side-bar-info-container">
              <div className={`ku-info-text ${isDrawerOpen ? "" : "close"}`}>
                ตารางเรียน/ตารางสอบ
              </div>
            </div>
          </Link>
        </div>
        <div
          className={`ku-side-bar-items ${
            isPageActive("/openRegister") ? "selected" : ""
          }`}
        >
          <Link to="/openRegister" className="ku-link">
            <div className="ku-side-bar-icon-container">
              <BsGrid3X3GapFill className="size" />
            </div>
            <div className="ku-side-bar-info-container">
              <div className={`ku-info-text ${isDrawerOpen ? "" : "close"}`}>
                วิชาที่เปิดให้ลงทะเบียน
              </div>
            </div>
          </Link>
        </div>
        <div
          className={`ku-side-bar-items ${
            isPageActive("/finance") ? "selected" : ""
          }`}
        >
          <Link to="/finance" className="ku-link">
            <div className="ku-side-bar-icon-container">
              <FaDollarSign className="size" />
            </div>
            <div className="ku-side-bar-info-container">
              <div className={`ku-info-text ${isDrawerOpen ? "" : "close"}`}>
                เลือกรูปแบบ/การเงิน
              </div>
            </div>
          </Link>
        </div>
        <div
          className={`ku-side-bar-items ${
            isPageActive("/enroll") ? "selected" : ""
          }`}
        >
          <Link to="/enroll" className="ku-link">
            <div className="ku-side-bar-icon-container">
              <FaThList className="size" />
            </div>
            <div className="ku-side-bar-info-container">
              <div className={`ku-info-text ${isDrawerOpen ? "" : "close"}`}>
                ลงทะเบียน/เพิ่ม-ถอน
              </div>
            </div>
          </Link>
        </div>
        <div
          className={`ku-side-bar-items ${
            isPageActive("/enrollResult") ? "selected" : ""
          }`}
        >
          <Link to="/enrollResult" className="ku-link">
            <div className="ku-side-bar-icon-container">
              <FaListUl className="size" />
            </div>
            <div className="ku-side-bar-info-container">
              <div className={`ku-info-text ${isDrawerOpen ? "" : "close"}`}>
                ผลการลงทะเบียน
              </div>
            </div>
          </Link>
        </div>
        <div
          className={`ku-side-bar-items ${
            isPageActive("/grade") ? "selected" : ""
          }`}
        >
          <Link to="/grade" className="ku-link">
            <div className="ku-side-bar-icon-container">
              <RiGraduationCapFill className="size" />
            </div>
            <div className="ku-side-bar-info-container">
              <div className={`ku-info-text ${isDrawerOpen ? "" : "close"}`}>
                ตรวจสอบผลการเรียน
              </div>
            </div>
          </Link>
        </div>
        <div
          className={`ku-side-bar-items ${
            isPageActive("/enrollHistory") ? "selected" : ""
          }`}
        >
          <Link to="/enrollHistory" className="ku-link">
            <div className="ku-side-bar-icon-container">
              <FaScroll className="size" />
            </div>
            <div className="ku-side-bar-info-container">
              <div className={`ku-info-text ${isDrawerOpen ? "" : "close"}`}>
                ประวัติการลงทะเบียน
              </div>
            </div>
          </Link>
        </div>
        <div
          className={`ku-side-bar-items ${
            isPageActive("/dashboard") ? "selected" : ""
          }`}
        >
          <Link to="/dashboard" className="ku-link">
            <div className="ku-side-bar-icon-container">
              <BsGrid3X3GapFill className="size" />
            </div>
            <div className="ku-side-bar-info-container">
              <div className={`ku-info-text ${isDrawerOpen ? "" : "close"}`}>
                สถิติ
              </div>
            </div>
          </Link>
        </div>
        <div
          className={`ku-side-bar-items ${
            isPageActive("/profile") ? "selected" : ""
          }`}
        >
          <Link to="/profile" className="ku-link">
            <div className="ku-side-bar-icon-container">
              <MdAccountBox className="size" />
            </div>
            <div className="ku-side-bar-info-container">
              <div className={`ku-info-text ${isDrawerOpen ? "" : "close"}`}>
                ประวัตินิสิต
              </div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Drawer_new;
