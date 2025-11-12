import { CiSquarePlus } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.min.css";
function Header() {
  return (
    <div>
      <div className="header">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Instagram</h2>
          <div className="d-flex align-items-center gap-3">
            <CiSquarePlus size={30} />
            <IoMdMenu size={30} />
          </div>
        </div>
      </div>

      <div className="d-flex align-items-between mb-3 gap-5">
        <div
          className="rounded-circle  bg-primary"
          style={{ width: "80px", height: "80px" }}
        ></div>
        <div className="d-flex justify-content-around gap-3">
          <div className="text-center">
            <h5>Posts</h5>
            <h6>200</h6>
          </div>
          <div className="text-center">
            <h5>Followers</h5>
            <h6>200</h6>
          </div>
          <div className="text-center">
            <h5>Following</h5>
            <h6>200</h6>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-around ">
        <button className="btn btn-secondary">edit profile</button>
        <button className="btn btn-secondary">share profile</button>
      </div>
    </div>
  );
}

export default Header;
