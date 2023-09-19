import { useState } from "react";
import Navigation from "../../features/Navigation/Navigation";
import Button from "../../components/Elements/Button/Button";
import Typography from "../Elements/Typography/Typography";

import ProfileIcon from "@mui/icons-material/Person";
import MoreIcon from "@mui/icons-material/KeyboardArrowDown";
import CompanyIcon from "@mui/icons-material/DomainDisabled";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

function Sidebar() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="flex flex-col bg-gray-100 h-screen w-3/4 text-black">
      <div className="flex flex-col mb-10 gap-5">
        <div className="flex gap-3 px-3 pt-3">
          <CompanyIcon />
          <Typography>Butch Company</Typography>
        </div>
        <div className="flex justify-start px-3">
          <ProfileIcon />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-start px-3 gap-2">
              <Typography>Butch Cortez</Typography>
              <Typography>CEO</Typography>
            </div>
            <Button onClick={handleShowMore}>
              <MoreIcon />
            </Button>
          </div>
          {showMore ? (
            <div className="flex flex-col gap-3">
              <Button style="flex gap-3 px-8 py-2">
                <SettingsIcon />
                <p>Setting</p>
              </Button>
              <button className="flex gap-3 px-8 py-2">
                <LogoutIcon />
                <p>Logout</p>
              </button>
            </div>
          ) : null}
        </div>
      </div>
      <Navigation />
    </div>
  );
}

export default Sidebar;
