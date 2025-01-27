import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { ChatbubbleEllipsesOutline } from 'react-ionicons'
import { PeopleOutline } from 'react-ionicons'
import { HomeOutline } from 'react-ionicons'
import { useDetectOutsideClick } from "../../useDetectOutsideClick"
import LogoutButton from "../buttons/LogoutButton"

function Nav() {
  const { isAuthenticated } = useAuth0();
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  if (isAuthenticated) {
    return (
      <div className="nav">
        <div className="nav-left-col">
          <Link to="/app" className="large-screen-logo-container">
            <img src="/images/Logo.png" classname="large-screen-logo" />
          </Link>
        </div>
        <div className="nav-center-col">
          <Link to="/app" className="nav-link">
            <HomeOutline
              color={'#ffffff'}
              height="30px"
              width="30px"
            />
          </Link>
          <Link to="/app/users" className="nav-link">
            <PeopleOutline
              color={'#ffffff'}
              height="30px"
              width="30px"
            />
          </Link>
          <Link to="/app/messaging" className="nav-link">
            <ChatbubbleEllipsesOutline
              color={'#ffffff'}
              height="30px"
              width="30px"
            />
          </Link>
          <Link to="/app/createpost" className="nav-link nav-link-ask-question">
            <button className="nav-question-button">Ask Question</button>
          </Link>
        </div>
        <div className="nav-right-col">
          <Link to="/app/myprofile" className="nav-link nav-avatar-link">ME</Link>
          <button onClick={onClick} className="nav-triangle-button">
            <div className="nav-triangle"></div>
          </button>
          <div ref={dropdownRef}
            className={`menu ${isActive ? "active" : "inactive"}`}
          >
            <div>
              <LogoutButton />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (!isAuthenticated) {
    return (
      <div>
        <Link to="/" className="nav">
          Home
        </Link>
        <Link to="/" className="nav">
          Sign In
        </Link>
        <Link to="/" className="nav">
          Register
        </Link>
      </div>
    );
  }
}
export default Nav;
