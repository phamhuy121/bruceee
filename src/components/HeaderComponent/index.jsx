import { Input, Button } from "antd";
import React from "react";
import { SearchOutlined, BellOutlined, UserOutlined } from "@ant-design/icons";
import "./style.scss";
import Collapse from "../image/collapse.svg";

const HeaderComponent = () => (
  <div className="header-container">
    <div className="input-container">
      <img src={Collapse} alt="" />
      <Input
        className="search-input"
        placeholder="input search text"
        prefix={<SearchOutlined style={{ margin: "25px 15px" }} />}
      />
      <div className="element-container">
        <Button
          className="notification-icon"
          type="primary"
          icon={<BellOutlined style={{ fontSize: "20px" }} />}
        ></Button>
        <Button
          className="profile-container"
          type="primary"
          icon={<UserOutlined style={{ fontSize: "16px" }} />}
        ></Button>

        <span>Xin chao, Le Thi Kim Tien</span>
      </div>
    </div>
  </div>
);

export default HeaderComponent;
