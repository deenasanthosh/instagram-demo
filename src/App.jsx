import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Instagram from "./pages/Instagram";
import SinglePost from "./pages/SinglePost";
export default function App(){
  return(
    <>
         <BrowserRouter>
            <Routes>
              <Route path="/" element={<Instagram />} />
              <Route path="/single-post" element={<SinglePost />} />
            </Routes>
          </BrowserRouter>
    </>
  );
}
 