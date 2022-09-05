import { UserOutlined, AndroidOutlined } from "@ant-design/icons";
import { ROUTER_URL } from "../routes/constant";

export const MENU_CONFIG = ({ onClick }) => [
  {
    key: 1,
    icon: <UserOutlined />,
    label: "Dashboard",
    children: [
      {
        key: 1.1,
        icon: <AndroidOutlined />,
        label: "nothing",
        onClick: onClick({ label: "training materials" }),
      },
    ],
  },
  {
    key: 2,
    icon: <UserOutlined />,
    label: "Parcel management",
    children: [
      {
        key: 2.1,
        icon: <AndroidOutlined />,
        label: "Parcel information",
        onClick: onClick({ label: "training materials" }),
      },
      {
        key: 2.2,
        icon: <AndroidOutlined />,
        label: "Track & trace",
        onClick: onClick({ label: "training materials" }),
      },
    ],
  },
  {
    key: 3,
    icon: <UserOutlined />,
    label: "Clearance",
    children: [
      {
        key: 3.1,
        icon: <AndroidOutlined />,
        label: "Inspection facilitation",
        onClick: onClick({ url: `${ROUTER_URL.INSPECTION_FACILITATION}` }),
      },
    ],
  },
];

export const SUBMISSION_STATUS = {
  INSPECTION_PENDING: "inspection pending",
  READY_INSPECTION: "ready for inspection",
};
