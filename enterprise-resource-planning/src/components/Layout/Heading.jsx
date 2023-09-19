import Typography from "../Elements/Typography/Typography";
import Button from "../Elements/Button/Button";

import MenuIcon from "@mui/icons-material/Menu";
import ChairIcon from "@mui/icons-material/Chair";

function Heading({ onClickNavigation }) {
  return (
    <div className="flex gap-3 p-3 bg-slate-50">
      <Button onClick={onClickNavigation}>
        <MenuIcon />
      </Button>
      <ChairIcon />
      <Typography>Cortez Upholstery</Typography>
    </div>
  );
}

export default Heading;
