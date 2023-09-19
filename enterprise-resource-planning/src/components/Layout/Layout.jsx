import { useState } from "react";
import Heading from "./Heading";
import Sidebar from "./Sidebar";
import Main from "./Main";

function Layout() {
  const [showNavigation, setShowNavigation] = useState(false);

  const handleShowNavigation = () => {
    setShowNavigation(!showNavigation);
  };

  return (
    <div className="bg-white text-black">
      <Heading onClickNavigation={handleShowNavigation} />
      {showNavigation ? <Sidebar /> : null}
      <Main />
    </div>
  );
}

export default Layout;
