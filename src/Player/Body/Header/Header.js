import React from "react";

import { Search } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";

import "./Header.css";
import { useDataLayerValue } from "../../../DataLayer";

function Header() {
  const [{user}, dispatch] = useDataLayerValue();

  return (
    <div className="header">
      <div className="header__left">
        <Search />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header__right">
        <Avatar alt={user?.display_name} src={user?.images[0].url} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
