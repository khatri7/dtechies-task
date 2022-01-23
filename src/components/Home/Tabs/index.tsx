import React from "react";
import clsx from "clsx";
import styles from "./tabsStyles.module.css";

interface TabsProps {
  selectedTab: number;
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
}

interface TabItemProps {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isSelected?: boolean;
}

const TabItem: React.FC<TabItemProps> = ({
  label,
  onClick,
  isSelected = false,
}) => (
  <li className="nav-item">
    <button
      className={clsx(
        "pb-3 ps-4 pe-4 bg-transparent",
        styles.tab,
        isSelected && styles.selected,
        isSelected && "text-primary font-weight-bold"
      )}
      onClick={onClick}
    >
      {label}
    </button>
  </li>
);

const Tabs: React.FC<TabsProps> = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className={clsx("align-self-end", styles.tabsContainer)}>
      <ul className="nav justify-content-end">
        {["Listening", "Reading", "Writing", "Speaking"].map((tab, index) => (
          <TabItem
            key={index}
            label={tab}
            onClick={() => setSelectedTab(index)}
            isSelected={selectedTab === index}
          />
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
