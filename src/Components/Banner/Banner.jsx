import React, { useState } from "react";
import "./Banner.css";
import Search from "../Search/Search";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
const Banner = () => {
  const history = useHistory()
  const [show, setShow] = useState(false);

  return (
    <div className="banner">
      <div className="banner_search">
        {show && <Search />}
        <Button
          onClick={() => setShow(!show)}
          className="banner_searchButton"
          variant="outlined"
        >
          {show ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner_info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of gateway to uncover the hidden gems near you
        </h5>
        <Button variant="outlined" onClick={()=>history.push('/search')}>Explore Nearby</Button>
      </div>
    </div>
  );
};

export default Banner;
