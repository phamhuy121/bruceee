import { Layout, Menu, Tabs } from "antd";
import React, { Children, useState } from "react";
import { MENU_CONFIG } from "../constant";
// import ViewModule from "../ViewModule";
import "./styles.scss";
// import { generateHexString } from "../utils";
import HeaderComponent from "../HeaderComponent";
import { useNavigate } from "react-router-dom";

const { Sider, Content } = Layout;
const { TabPane } = Tabs;

const LayoutRoot = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [taps, setTaps] = useState([]);
  const [activeKey, setActiveKey] = useState(null);
  const navigate = useNavigate();
  const [listTabs, setListTabs] = useState([]);
  const onClick =
    ({ url, label }) =>
    () => {
      navigate(url);
      console.log(url);
      // const generateKey = generateHexString();
      // setActiveKey(generateKey);
      // setTaps([
      //   ...taps,
      //   {
      //     title: label,
      //     url: url,
      //     key: generateKey,
      //   },
      // ]);
      // setListTabs([...listTabs]);
    };
  const onCloseTap = (key) => {
    setTaps([...taps.filter((item) => item.key !== key)]);
  };
  const onEdit = (targetKey, action) => {
    // if (action === "add") {
    //   add();
    // } else {
    //   console.log("targetKey", targetKey);
    //   onCloseTap(targetKey);
    // }
  };
  const onActiveTab = (key) => {
    setActiveKey(key);
  };
  return (
    <Layout>
      <HeaderComponent />
      <Layout className="site-layout" style={{ height: "100vh" }}>
        <Sider
          className="menu-sider"
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <div className="logo" />
          <Menu
            className="menu-nav"
            theme="light"
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["1"]}
            items={MENU_CONFIG({ onClick })}
          />
        </Sider>
        <Content
          className="site-layout-background"
          style={{
            margin: "10px 10px",
            padding: "10px 10px",
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutRoot;
