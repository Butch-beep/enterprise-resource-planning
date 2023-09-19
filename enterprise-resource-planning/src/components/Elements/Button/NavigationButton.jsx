import Typography from "../Typography/Typography";
import Button from "./Button";

function NavigationButton({ icon, text }) {
  return (
    <Button style="flex items-center p-0 gap-3 bg-transparent text-black h-14">
      {icon}
      <Typography>{text}</Typography>
    </Button>
  );
}

export default NavigationButton;
