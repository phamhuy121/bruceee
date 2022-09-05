import { Grid } from "@mui/material";
import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { ROUTER_URL } from "../../routes/constant";

const FormItem = ({ name, icon, address, date, flagged, status, priority }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${ROUTER_URL.VIEW_DETAIL}`);
  };
  return (
    <>
      <Grid className="group-item" container spacing={3} onClick={handleClick}>
        <Grid item xs={1}>
          <div className="value">{icon}</div>
        </Grid>
        <Grid item xs={2}>
          <div className="label">ha noi </div>
          <div className="value">{(address, name)}</div>
        </Grid>
        <Grid item xs={2}>
          <div className="label">Arrival date</div>
          <div className="value">{date}</div>
        </Grid>
        <Grid item xs={3}>
          <div className="label">
            Flagged for inspection / total no. of commodity
          </div>
          <div className="value">{flagged}</div>
        </Grid>
        <Grid item xs={3}>
          <div className="label">Submission status</div>
          <div className="value">{status}</div>
        </Grid>
        <Grid item xs={1}>
          <div className="value">{priority}</div>
        </Grid>
      </Grid>
    </>
  );
};

export default FormItem;
