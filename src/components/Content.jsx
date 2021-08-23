import React, { useState } from "react";
import Tasks from "./Tasks";
import Sidebar from "./Sidebar";

const Content = () => {
  const [selectedTab, setSelectedTab] = useState("INBOX");
  return (
    <section ClassName="content">
      <Sidebar selectedTab={selectedTab} setselectedTab={setSelectedTab} />
      <Tasks />
    </section>
  );
};

export default Content;
