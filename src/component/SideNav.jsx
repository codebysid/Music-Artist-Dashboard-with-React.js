import React from "react";
import "../styling/SideNav.css";
import { IconButton } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import GroupIcon from "@mui/icons-material/Group";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Music from "./Music";
import Notification from "./Notification";
import Money from "./Money";
import Users from "./Users";

const SideNav = () => {
  return (
    <BrowserRouter>
      <div className="baap">
        <div className="sideNavBox">
          <div className="sideNavIcons">
            <Link to="">
              <IconButton>
                <GridViewIcon className="NavIcons" color="success" />
              </IconButton>
            </Link>

            <Link to="Music">
              <IconButton>
                <AudiotrackIcon className="NavIcons" color="success" />
              </IconButton>
            </Link>

            <Link to="Notification">
              <IconButton>
                <NotificationsIcon className="NavIcons" color="success" />
              </IconButton>
            </Link>

            <Link to="Money">
              <IconButton>
                <AttachMoneyIcon className="NavIcons" color="success" />
              </IconButton>
            </Link>

            <Link to="users">
              <IconButton>
                <GroupIcon className="NavIcons" color="success" />
              </IconButton>
            </Link>
          </div>
          </div>
          <div className="routes">
            <Routes>
              <Route exact path="" element={<Dashboard />}></Route>

              <Route path="Music" element={<Music />}></Route>

              <Route path="Notification" element={<Notification />}></Route>

              <Route path="Money" element={<Money />}></Route>

              <Route path="users" element={<Users />}></Route>
            </Routes>
          </div>
        </div>
    </BrowserRouter>
  );
};

export default SideNav;
