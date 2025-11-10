import Header from "../components/Header"
import Navbar from "../components/Navbar"
import PostSection from "../components/PostSection"



function Instagram() {
  return (
    <>
    <div className="container mt-5" style={{maxWidth:"500px",border:"1px solid"}}>
        <Header/>        
        <PostSection/>
        <Navbar/>
    </div>    
    </>
  )
}

export default Instagram
