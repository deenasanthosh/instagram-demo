import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { RiVideoFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios  from "axios";


function PostSection() {
  const[activetab,setActiveTab]=useState("post")
  const[posts, setPosts]=useState([]);
  const[filtered,setFiltered]=useState([]);

  const navigate =useNavigate();

//  async function fetchData(){
//   const response= await fetch("https://jsonplaceholder.typicode.com/posts")
//    const data = await response.json();
//    setPosts(data);
//   setFiltered(data);
//    //console.log(posts);
// }

const fetchData = async() => {
   const res =await axios.get("https://jsonplaceholder.typicode.com/posts");
   setPosts(res.data);
   setFiltered(res.data);
}

  useEffect(()=>{
    fetchData()
  },[]);
   

  return (
    <>
    <div className="d-flex justify-content-between text-center">
      <button className="btn w-100" onClick={()=> setFiltered(posts)}>
        <HiOutlineSquares2X2 />
      </button>
      <button className="btn w-100" onClick={()=> {setFiltered(posts);
        setFiltered((posts)=> posts.filter((item)=> item.userId===1))
      }}>
        <RiVideoFill />
      </button>
      <button className="btn w-100" onClick={()=>{setFiltered(posts);
        setFiltered((posts)=> posts.filter((item)=> item.userId===2))
      }}>
        <CgProfile />
      </button>
    </div>
    <ul>
      {filtered.map((item)=>(
        <li key={item.id}>
          <p onClick={()=> navigate("/single-post",{state:item})}>
          {item.title}
          </p>
      { /* <Link to={`/single-post/${item.id}`}>{item.title}</Link>*/}
        </li>
      ))}
    </ul>
    </>
  )
}

export default PostSection