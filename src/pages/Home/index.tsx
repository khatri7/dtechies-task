import React, { useState } from "react";
import Tabs from "components/Home/Tabs";
import Header from "components/Home/Header";
import TabBody from "components/Home/TabBody";

const Home: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  return (
    <div className="container pt-5">
      <div className="d-flex justify-content-between pb-4 border-bottom">
        <Header />
        <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </div>
      <TabBody selectedTab={selectedTab} />
    </div>
  );
};

export default Home;
