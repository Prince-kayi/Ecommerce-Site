import React from "react";
import './App.css';
import "./Display.css"
import Display from "./Display";
import "./Pages/pages.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./Pages/Register";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
import Card from "./Card";
import Zfooter from "./Footer";
import "./Footer.css"
import Login from "./Pages/Login";

const App = () => {
  return (
    <>
      <Display />
      <div className="ko">
        <ImageSlider slide={SliderData} />
        <div className="second">  </div>
      </div>
      <div className="wrapper">
        <Card
          img="https://cars.usnews.com/images/article/202105/128944/5_2021_dodge_challenger.jpg"
          title="Fast cars"
          desc="$50,000"
        />
        <Card
          img="https://static.seibertron.com/images/news/7e1eeb5ef81e926ce08f8b8eaf0a6c41.jpg"
          title="Toys"
          desc="$30"
        />
        <Card
          img="https://cdn.packhacker.com/2019/07/c9f677e0-backpacker-backpacks.jpg"
          title="Bag Packs"
          desc="$120"
        />
        <Card
          img="https://i.rtings.com/assets/pages/EnaGXFcR/best-home-printers-202108-medium.jpg"
          title="Printers"
          desc="$150"
        />
        <Card
          img="https://www.babyboom.co.za/wp-content/uploads/2019/10/8001090659200.jpg"
          title="Pampas"
          desc="$20"
        />
        <Card
          img="https://www.hazendal.co.za/wp-content/uploads/2021/01/WL-our-wines.jpg"
          title="Tasty wines"
          desc="$80"
        />
        <Card
          img="https://www.ubuy.za.com/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFLNld1TndIUEwuX0FDX1NMMTUwMF8uanBn.jpg"
          title="Kitchen pans"
          desc="$100"
        />
        <Card
          img="https://hips.hearstapps.com/hmg-prod/images/allbikes-1539286251.jpg"
          title="Mountain bikes"
          desc=" $300"
        />
        <Card
          img="https://images.pushsquare.com/35dc0becfde2e/ps5-playstation-5-stock-guide-1.900x.jpg"
          title="Playstation 5"
          desc="$750"
        />
        <Card
          img="https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2020/12/Best_Electric_Range.jpg"
          title="Stoves"
          desc="$1,750"
        />
        <Card
          img="https://i.rtings.com/assets/pages/6S2WXjTl/best-laptop-medium.jpg"
          title="Laptops"
          desc="$1,200"
        />
        <Card
          img="https://www.ubuy.za.com/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODF2QXl2TUQxZkwuX0FDX1NMMTUwMF8uanBn.jpg"
          title="Sofa chairs"
          desc=" $1,050"
        />
        <Card
          img="https://cdn.mos.cms.futurecdn.net/Cz3pWVewW2mAhEq2YMpd9H-768-80.jpg"
          title="Sofa Bed"
          desc="$800"
        />
        <Card
          img="https://image.shutterstock.com/image-vector/vector-fitness-sneakers-shoes-training-260nw-1272576460.jpg"
          title="Sneakers"
          desc="$200"
        />

        <Card
          img="https://modern-electronics.weebly.com/uploads/2/7/1/1/27118291/4682669_orig.png"
          title="LED TV"
          desc="$500"
        />
        <Card
          img="https://sc01.alicdn.com/kf/HTB10GaKIFXXXXXpXFXXq6xXFXXXR/224102335/HTB10GaKIFXXXXXpXFXXq6xXFXXXR.jpg"
          title="Tuxedo Suits"
          desc="$500"
        />
        <Card
          img="https://www.armedandgorgeous.com/wp-content/uploads/2022/02/Armed-and-Gorgeous-Online-Jewellery-scaled-e1621252319608.jpeg"
          title="Jewelleries"
          desc="$200"
        />
        <Card
          img="https://reviewed-com-res.cloudinary.com/image/fetch/s--owJpC3M1--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_1200/https://reviewed-production.s3.amazonaws.com/1618429574992/best-tea-kettles-reviewed.jpg"
          title="Electric Kettles"
          desc="$70"
        />
      </div>
      <div className="access">
        <Routes>
          <Route to="/register" element={<Register />} />
          <Route to="/login" element={<Login />} />
        </Routes>
      </div>
      <Login />
      <Zfooter />
    </>
  );
}
export default App;
