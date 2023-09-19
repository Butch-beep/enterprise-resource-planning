import Button from "../../components/Elements/Button/Button";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Typography from "../../components/Elements/Typography/Typography";

function Shortcuts() {
  return (
    <div className="flex flex-col gap-3">
      <Typography>Shortcut</Typography>
      <div className="flex flex-wrap gap-3">
        <div className="flex flex-col gap-1">
          <div className="flex justify-start">
            <Button>BOM</Button>
            <ArrowOutwardIcon />
          </div>
          <div className="flex justify-start">
            <Button>Forecasting</Button>
            <ArrowOutwardIcon />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-start">
            <Button>Production Plan</Button>
            <ArrowOutwardIcon />
          </div>
          <div className="flex justify-start">
            <Button>BOM Stock Report</Button>
            <ArrowOutwardIcon />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-start">
            <Button>Work Order</Button>
            <ArrowOutwardIcon />
          </div>
          <div className="flex justify-start">
            <Button>Production Planning Report</Button>
            <ArrowOutwardIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shortcuts;
