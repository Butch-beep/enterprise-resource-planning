import NavigationButton from "../../components/Elements/Button/NavigationButton";

import ManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import ProjectIcon from "@mui/icons-material/FolderCopy";
import InventoryIcon from "@mui/icons-material/Inventory";
import AdminIcon from "@mui/icons-material/SupervisorAccount";
import AccountingIcon from "@mui/icons-material/ReceiptLong";
import RetailIcon from "@mui/icons-material/Storefront";

function Navigation() {
  return (
    <div className="flex flex-col">
      <NavigationButton
        icon={<ManufacturingIcon className="basis-1/4" />}
        text="Manufacturing"
      />
      <NavigationButton
        icon={<ProjectIcon className="basis-1/4" />}
        text="Projects"
      />
      <NavigationButton
        icon={<InventoryIcon className="basis-1/4" />}
        text="Stocks"
      />
      <NavigationButton
        icon={<AdminIcon className="basis-1/4" />}
        text="Admin"
      />
      <NavigationButton
        icon={<AccountingIcon className="basis-1/4" />}
        text="Accounting"
      />
      <NavigationButton
        icon={<RetailIcon className="basis-1/4" />}
        text="Retail"
      />
    </div>
  );
}

export default Navigation;
