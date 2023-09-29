import Drawer from "../drawer/drawer";
import Header from "../header/header";
import Day from "../news/currentDay";
import "./openRegister.css";
function OpenRegister() {
  return (
    <div className="">
      <Drawer />
      <Header />
      <div className="ku-layout">
        <div className="ku-inner-layout">
          <div className="ku-title-container-left">
            <div className="">
              <div className="text-2xl">
              รายวิชาที่เปิดให้ลงทะเบียน
              </div>
              <div className="flex">
                <div className="ku-day">
                  <Day/>
                </div>

                <div className="ku-semeter text-xs">ภาคต้น 2566</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenRegister;
