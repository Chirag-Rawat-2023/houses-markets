import React from 'react'
import Layout from '../component/layout/Layout'
import {useNavigate} from 'react-router-dom'
import Slider from '../component/Slider';
import "../styles/homepage.css";
import Footer from '../component/layout/Footer';
const  Homepajes= () => {
  const navigate = useNavigate();
  const img1 =
    "https://images.unsplash.com/photo-1627141234469-24711efb373c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80";
  const img2 =
    "https://images.unsplash.com/photo-1547866751-446296f133ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80";
  return (
    <Layout>
      <Slider />
      <div className="home-cat row d-flex align-items-center justify-content-center">
        <h1>Category</h1>
        <div className="col-md-5 ">
          <div className="Imagecontainer">
            <img src={img1} alt="Rent" style={{ width: "100%" }} />
            <button className="btn" onClick={() => navigate("/category/rent")}>
              FOR RENT
            </button>
          </div>
        </div>
        <div className="col-md-5">
          <div className="Imagecontainer">
            <img src={img2} alt="Rent" style={{ width: "100%" }} />
            <button className="btn" onClick={() => navigate("/category/sale")}>
              FOR SALE
            </button>
          </div>
        </div>
      </div>
  
    </Layout>
    
  );
};



export default Homepajes