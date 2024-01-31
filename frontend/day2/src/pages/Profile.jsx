import { useState } from "react";
import { Link as Defpath, Link } from 'react-router-dom';
import style from './Profile.module.css';

function MyProfile() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav_menu nav_active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  return (
    <div>
    <div>
      {/* Add the navigation bar here */}
      <nav className={style.nav} style={{marginTop:"300px"}}>
        <Defpath to="/" className="nav__brand" >
          YogaBalance
        </Defpath>
        <ul className={active}>
            <br>
            </br>
          <li className="nav__item">
            <Defpath to="/" className="nav__link">
              Home
            </Defpath>
          </li>
          <li className="nav__item">
            <Defpath to="/classes" className="nav__link">
              Services
            </Defpath>
          </li>
          <li className="nav__item">
            <Defpath to="/about" className="nav__link">
              AboutUs
            </Defpath>
          </li>
          <li className="nav__item">
            <Defpath to="/contact" className="nav__link">
              ContactUs
            </Defpath>
          </li>
          <li className="nav__item">
            <Defpath to="/myprofile" className="nav__link">
              MyProfile
            </Defpath>
          </li>
          <li className="nav__item">
          <Defpath to="/signup">
            <button className="nav__button">Logout</button></Defpath>
          </li>
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
      </div>
      <br></br><br></br>      <br></br><br></br>

      <div>
        <div className="content-profile-page">
          <div className="profile-user-page card">
            <div className="img-user-profile">
              {/* <img className="profile-bgHome" src="https://37.media.tumblr.com/88cbce9265c55a70a753beb0d6ecc2cd/tumblr_n8gxzn78qH1st5lhmo1_1280.jpg" /> */}
              <img className="avatar" src="https://images.unsplash.com/photo-1542803293-cde7da05c348?q=80&w=2984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="jofpin" style={{width:"1400px"}}/>
            </div>
          
            <button><Link to="/form">EDIT PROFILE</Link></button>
            <div className="user-profile-data">
              <h1>JD</h1>
              <p>jd@gmail.com</p>
            </div> 
            <div className="description-profile"><b>PHONE:</b> 9789723331 | <b>D0B:</b> 30/01/2002 | COIMBATORE | INDIA  </div><br></br>
            {/* <ul className="data-user">
              <li><a><strong>3390</strong><span>Posts</span></a></li>
              <li><a><strong>718</strong><span>Followers</span></a></li>
              <li><a><strong>239</strong><span>Following</span></a></li>
            </ul> */}
          </div>
        </div>
        <footer>
          <h4>Design by <a href="https://twitter.com/jofpin" target="_blank" title="José Pino">@jofpin</a></h4>
        </footer>
      </div>
      <footer className="content-footer">
          <p> Say hi to us on these social networks: </p>
          <ul className="social">
            <li> <a href="https://www.instagram.com/narendhar_/"> Instagram </a> </li>
            <li> <a href="https://www.twitter.com/"> Twitter </a> </li>
            <li> <a href="INSERT_GOOGLE+_URL_HERE"> Google+</a> </li>
          </ul>
        </footer>
      </div>
      );
      }
      export default MyProfile;