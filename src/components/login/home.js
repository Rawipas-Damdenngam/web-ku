import { useState } from "react";
import Logo from "../../images/logo.png";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import "./home.css";
import { Link } from "react-router-dom";

function LoginHome() {
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  function handleEyeClick() {
    setIsEyeOpen(!isEyeOpen);
    setIsPassword(!isPassword);
  }

  return (
    <div className="flex ">
      <section className="w-3/5 h-screen bg-red-500 flex justify-center">
        <section className="w-11/12   my-10 bg-white bg-opacity-50 ">
          <div className="mb-10  mt-6 pl-10">ข่าวประชาสัมพันธ์ทั่วไป</div>
          <section className="h-4/5 mx-10   flex justify-center items-center ">
            <div>eiei</div>
          </section>
        </section>
      </section>
      <section className="w-2/5  content-center bg-blue-300">
        <div className="w-full h-full   grid content-center  p-10">
          <img
            className="w-44  justify-self-center mb-5"
            src={Logo}
            alt="logo ku"
          />
          <div className="justify-self-center">
            เข้าใช้งานระบบลงทะเบียนนิสิต
          </div>
          <div className="pt-10 pb-2">บัญชีผู้ใช้เครือข่ายนนทรี</div>
          <input
            className="border rounded py-1 pl-4"
            type="text"
            maxLength={24}
            placeholder="เช่น b63xxxxxxxx หรือ regxxx"
          />
          <div className="pt-5 pb-2">รหัสผ่าน</div>
          <div className="relative ">
            <input
              className="border rounded w-full py-1 pl-4"
              type={isPassword ? "text" : "password"}
              maxLength={16}
              placeholder="รหัสผ่านผู้ใช้เครือข่ายนนทรี"
            />
            <div className="absolute transfrom scale-x-[-1] right-2 inset-y-2  w-5 h-5 text-gray-400 ">
              {isEyeOpen ? (
                <ImEye onClick={handleEyeClick} />
              ) : (
                <ImEyeBlocked onClick={handleEyeClick} />
              )}
            </div>
          </div>

          <span className="flex justify-end pb-3">
            <a
              href="https://accounts.ku.ac.th/private/login"
              className="pt-3 mr-4 text-blue-500"
            >
              ลืมรหัสผ่าน ?
            </a>
            <div className="pt-3 text-gray-500 mr-4">|</div>
            <a
              href="https://registrar.ku.ac.th/contact-us"
              className="pt-3 text-blue-500"
            >
              ติดต่อเรา
            </a>
          </span>

          <Link
            to="/news"
            className="border-black rounded bg-green-400 text-white p-1.5 flex justify-center"
          >
            <button>เข้าสู่ระบบ</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default LoginHome;
