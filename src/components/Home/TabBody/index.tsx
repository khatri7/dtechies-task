import React from "react";

interface Props {
  selectedTab: number;
}

const TabBody: React.FC<Props> = ({ selectedTab }) => {
  return <div>{selectedTab}</div>;
};

export default TabBody;
