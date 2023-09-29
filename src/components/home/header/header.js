import "./header.css";
import { BsBellFill } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiShutDownLine } from "react-icons/ri";
function Header() {
  return (
    <nav className="ku-header-container">
      <section className="ku-header-title">
        <div>ระบบลงทะเบียนนิสิต มหาวิทยาลัยเกษตรศาสตร์</div>
        <section className="ku-header-noti-container">
          <div className="pl-10">
            <BsBellFill />
          </div>
          <div className="pl-7">TH</div>
          <div>
            <MdKeyboardArrowDown />
          </div>
          <div className="pl-1">|</div>
        </section>
      </section>

      <section className="ku-header-person-info">
        <div className="">6310451367</div>
        <div className="pl-2">นาย รวิภาส ดำเด่นงาม</div>
      </section>

      <section className="ku-header-icon-container">
        <div>
          <RiShutDownLine className="ku-header-icon" />
        </div>
      </section>
    </nav>
  );
}
export default Header;
