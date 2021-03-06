import React, { useState } from "react";
import Tabs from "components/Home/Tabs";
import Header from "components/Home/Header";
import TabBody from "components/Home/TabBody";
import Trend from "components/Home/Trend";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  return (
    <div className="container pt-5 pb-5">
      <div className="d-flex justify-content-between pb-4 border-bottom">
        <Header />
        <div className="d-flex flex-column justify-content-between">
          <div className="align-self-end">
            <Link to="/account" type="button" className="btn btn-primary">
              Account
            </Link>
          </div>
          <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        </div>
      </div>
      <TabBody selectedTab={selectedTab} />
      <hr
        style={{
          height: "3px",
          marginLeft: "-3rem",
          marginRight: "-3rem",
        }}
        className="mb-5"
      />
      <Trend />
    </div>
  );
};

export default Home;
