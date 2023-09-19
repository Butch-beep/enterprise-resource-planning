import Button from "../../components/Elements/Button/Button";
import Typography from "../../components/Elements/Typography/Typography";

function WorkStation() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-start">
        <Typography>Workstation</Typography>
      </div>
      <div className="flex justify-start flex-wrap border content-center">
        <Button style="w-40">Dashboard</Button>
        <Button style="w-40">Production</Button>
        <Button style="w-40">Reports</Button>
      </div>
    </div>
  );
}

export default WorkStation;
