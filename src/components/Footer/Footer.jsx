import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Accusamus doloribus, quisquam ea voluptatem quidem nulla tempora ex
            consectetur. Vel delectus laboriosam molestiae totam dicta impedit
            optio, repudiandae cupiditate eaque amet et nemo illum ipsam
            similique deleniti atque placeat!
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Chintal Kunta, CheckPost, L.B.Nagar,Hyderabad, Telangana,500074
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone:9987456321</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email:store@mail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <div className="text">Headphones</div>
          <div className="text">Smart Watches</div>
          <div className="text">Bluetooth Spaker</div>
          <div className="text">Wirless Earbuds</div>
          <div className="text">Home Theatre</div>
          <div className="text">Projectors</div>

        </div>
        <div className="col">
          <div className="title">Home</div>
          <div className="text">About</div>
          <div className="text">Privacy Policy</div>
          <div className="text">Returns</div>
          <div className="text">Terms & Conditions</div>
          <div className="text">Contact Us</div>
         
        </div>
      </div>
      <div className="buttom-bar">
  <div className="buttom-bar-content">
    <div className="text">
      HEADSET STORE 2024 BY JS DEV. PREMIUM E-COMMERCE SOLUTIONS
    </div>
    <img src={Payment}/>
  </div>
</div>

    </footer>
  );
};

export default Footer;
