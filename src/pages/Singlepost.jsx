import { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";


function Singlepost() {
  //const[post,setPost]=useState({});
  // const{id}= useParams();

  // async function fetchdata() {
  //   const response = await fetch(
  // `https://jsonplaceholder.typicode.com/posts/${id}`
  // );
  //   const data =await response.json();
  //   setPost (data);
  // }
  // useEffect(()=>{
  //    fetchdata();
  // },[])
   const location = useLocation();
   const navigate =useNavigate();
   const post = location.state;
   console.log(post);
  return (
    <>
     <button onClick={()=>navigate(-1)}>Go Back </button>
     <p>{post.id}</p>
     <p>{post.userId}</p>
     <p>{post.title}</p>
     <p>{post.body}</p>
    
    </>
  )
}

export default Singlepost