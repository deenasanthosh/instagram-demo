import { MdHome } from "react-icons/md";
import { RiVideoFill } from "react-icons/ri";
import { FiMessageSquare } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  return (
    <>
    <div className="d-flex justify-content-between border-top pt-3  container mt-2" style={{maxWidth:"700px",border:"1px solid"}}>
    <MdHome  size={30}/>
    <RiVideoFill size={30} />
    <FiMessageSquare size={30}/>
    <FiSearch size={30}/>
    <CgProfile size={30}/>
    </div>
    </>
  )
}

export default Navbar