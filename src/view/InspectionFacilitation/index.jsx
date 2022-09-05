import React from "react";
import AirplaneTicketOutlinedIcon from "@mui/icons-material/AirplaneTicketOutlined";
import CellTowerOutlinedIcon from "@mui/icons-material/CellTowerOutlined";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./style.scss";
import SimpleTabs from "../../components/Tabpanel";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import ControlledOpenSelect from "../../components/SelectAll";
import ControlledOpenSort from "../../components/SortBy";
import ControlledOpenOrder from "../../components/OrderBy";

const InspecttionFacilitation = () => {
  return (
    <>
      <div className="form-group">
        <div>
          <p className="clearance">CLEARANCE</p>
          <h4 className="inspection">Inspection facilitation</h4>
          <div className="group">
            <div className="form-control">
              <div className="form-item">
                <h5 className="title">Air transport</h5>
                <span className="inspection-status">
                  No. of inspection pending status
                </span>
                <h3 className="number">20</h3>
              </div>
              <div className="plane-icon">
                <AirplaneTicketOutlinedIcon />
              </div>
            </div>
            <div className="form-control">
              <div className="form-item">
                <h5 className="title">Maritime transport</h5>
                <span className="inspection-status">
                  No. of inspection pending status
                </span>
                <h3 className="number">40</h3>
              </div>
              <div className="plane-icon">
                <CellTowerOutlinedIcon />
              </div>
            </div>
            <div className="form-control">
              <div className="form-item">
                <h5 className="title">Land transport</h5>
                <span className="inspection-status">
                  No. of inspection pending status
                </span>
                <h3 className="number">500</h3>
              </div>
              <div className="plane-icon">
                <ConfirmationNumberOutlinedIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="form-control-input">
          <div>
            <input
              className="search-input"
              placeholder="Search voyage/flight no., vessel/airline name, country origin"
            />
          </div>
          <div>
            <input className="date" type="date" />
          </div>
          <button className="btn-search">
            <SearchOutlinedIcon className="icon-search" />{" "}
            <p className="btn-name">Search</p>
          </button>
        </div>
      </div>
      <div className="table-form">
        <div className="form-filter">
          <div className="last-updated">
            <CachedOutlinedIcon />
            <p className="time-updated">
              ︱Last updated on Thursday, 08 Aug 2022 at 16:20
            </p>
          </div>
          <div className="filter">
            <div className="name-filter">FILTER BY:</div>
            <ControlledOpenSelect
              value1="Air transport"
              value2="Maritime transport"
              value3="Land transport"
            />
          </div>
          <div className="sort">
            <div className="name-sort">SORT BY:</div>
            <ControlledOpenSort
              value1="Air transport mode"
              value2="Maritime transport mode"
              value3="Land transport mode"
              value4="Arrivals today"
              value5="Arrivals tomorrow"
            />
          </div>
          <div className="order">
            <div className="name-order">ORDER BY:</div>
            <ControlledOpenOrder value1="Ascending" value2="Descending" />
          </div>
        </div>
        <SimpleTabs />
      </div>
    </>
  );
};

export default InspecttionFacilitation;
