import { useState } from "react";
import { Drawer, Layout, theme } from "antd";
import SideIcon from "../../assets/images/sidebar/collaps-icon.png";
import LogoImg from "../../assets/icons/logo.jpg";
import TopHeader from "../Header/Header";
import Sider from "./Sider";
import "./Sidebar.scss";

interface OutletProps {
  outlet: any;
}

const Sidebar = ({ outlet }: OutletProps) => {
  const [iscollapsed, setIsCollapsed] = useState(false);
  const [isopen, setIsOpen] = useState(false);
  const [location, setLocation] = useState(window.location.pathname);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { Header, Content } = Layout;

  return (
    <>
      <Drawer
        rootClassName="Drawer"
        placement="left"
        onClose={() => setIsOpen(false)}
        open={isopen}
      >
        <Sider />
      </Drawer>
      <Layout className="layout" onClick={()=> setLocation(window.location.pathname)}>
        <Sider iscollapsed={iscollapsed} location={location} setLocation={setLocation} />
        <Layout className="site-layout">
          <Header style={{ padding: 0, background: "linear-gradient(250deg, rgba(68,68,68,1) 6%, rgba(45,45,45,1) 100%)" }}>
            <div className="responsive-header">
              <img src={LogoImg} alt="logo" />
            </div>
            <TopHeader setIsOpen={setIsOpen} />
            {iscollapsed ? (
              <img
                src={SideIcon}
                alt="sideicon"
                onClick={() => setIsCollapsed(!iscollapsed)}
                className="sideicon cursor-pointer"
              />
            ) : (
              <img
                src={SideIcon}
                alt="sideicon"
                onClick={() => setIsCollapsed(!iscollapsed)}
                className="sideicon cursor-pointer"
              />
            )}
          </Header>
          <Content
            style={{
              padding: 30,
              height: "90vh",
              overflow: "auto",
              background: "#444444",
              opacity:0.9
            }}
          >
            {outlet}
          </Content>
        </Layout>
      </Layout>
      
    </>
  );
};
export default Sidebar;
