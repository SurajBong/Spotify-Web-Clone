import React from "react";

import { Home, Search, LibraryMusic } from "@material-ui/icons";

import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions/SidebarOptions";
import { useDataLayerValue } from "../../DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOptions Icon={Home} title="Home" />
      <SidebarOptions Icon={Search} title="Search" />
      <SidebarOptions Icon={LibraryMusic} title="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOptions title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
