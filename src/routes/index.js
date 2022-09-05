import { useRoutes } from "react-router-dom";
import { ROUTER_URL } from "./constant";

import InspecttionFacilitation from "../view/InspectionFacilitation/index";
import LayoutRoot from "../components/Layout";
import ViewDetail from "../view/viewDetails";

function Router() {
  return useRoutes([
    {
      path: `/${ROUTER_URL.INSPECTION_FACILITATION}`,
      element: <InspecttionFacilitation />,
      children: [{ path: ROUTER_URL.VIEW_DETAIL, element: <ViewDetail /> }],
    },
    {
      path: `/${ROUTER_URL.VIEW_DETAIL}`,
      element: <ViewDetail />,
    },
    {
      path: "/*",
      element: <LayoutRoot />,
      children: [
        // { path: ROUTER_URL.USER_INFOR, element: <LazyUserInfor /> },
        // {
      ],
    },
  ]);
}
export default Router;
