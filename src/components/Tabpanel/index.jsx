import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FormItem from "../FormItem";
import AirplaneTicketOutlinedIcon from "@mui/icons-material/AirplaneTicketOutlined";
import CellTowerOutlinedIcon from "@mui/icons-material/CellTowerOutlined";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import { SUBMISSION_STATUS } from "../../components/constant";

const dataTable = [
  {
    icon: AirplaneTicketOutlinedIcon,
    address: { maersk: "Maersk", nameAddress: "V. 284 · Shanghai, CH" },
    date: "19/08/2022 10:30",
    flagged: "3/20",
    status: SUBMISSION_STATUS.INSPECTION_PENDING,
    priority: AccessAlarmOutlinedIcon,
  },
  {
    icon: CellTowerOutlinedIcon,
    address: "Maersk",
    date: "19/08/2022 10:30",
    flagged: "3/20",
    status: SUBMISSION_STATUS.INSPECTION_PENDING,
    priority: AccessAlarmOutlinedIcon,
  },
  {
    icon: AirplaneTicketOutlinedIcon,
    address: "Maersk",
    date: "19/08/2022 10:30",
    flagged: "3/20",
    status: SUBMISSION_STATUS.READY_INSPECTION,
    priority: AccessAlarmOutlinedIcon,
  },
  {
    icon: ConfirmationNumberOutlinedIcon,
    address: "Maersk",
    date: "19/08/2022 10:30",
    flagged: "3/20",
    status: SUBMISSION_STATUS.INSPECTION_PENDING,
    priority: AccessAlarmOutlinedIcon,
  },
  {
    icon: CellTowerOutlinedIcon,
    address: "Maersk",
    date: "19/08/2022 10:30",
    flagged: "3/20",
    status: SUBMISSION_STATUS.READY_INSPECTION,
    priority: AccessAlarmOutlinedIcon,
  },
];

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const SimpleTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Inspection pending" />
          <Tab label="Ready for inspection" />
        </Tabs>
      </AppBar>
      {dataTable.map((item, index) => {
        const Icon = item.icon;
        const PriorityIcon = item.priority;
        return (
          <FormItem
            key={index}
            icon={<Icon />}
            address={item?.address?.maersk && item?.address?.nameAddress}
            date={item?.date}
            flagged={item?.flagged}
            status={item?.status}
            priority={<PriorityIcon />}
          />
        );
      })}
    </div>
  );
};
export default SimpleTabs;
