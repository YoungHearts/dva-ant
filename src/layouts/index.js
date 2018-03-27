import React from "react";
import { connect } from "dva";
// import Link from 'umi/link';
// import PropTypes from 'prop-types'
import { Menu, Icon, Layout, Breadcrumb } from "antd";

// import classnames from 'classnames'
import styles from "./index.less";
import { getMenuData } from '../common/menu';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const menuDate = [
  { icon: "pie-chart", name: "首页", link: "/" },
  { icon: "desktop", name: "会员管理", path: "/users", children:[{ icon: "pie-chart", name: "children1", path: "/" },{ icon: "pie-chart", name: "children2", path: "/" }]},
  { icon: "desktop", name: "中奖明细", path: "/win" }
];
// console.log(getMenuData().forEach(getRedirect));
class Layoutd extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isNavbar: true,
      menuDate: this.menuDate,
      collapsed: false
      // visible:true,
    };
  }
  toggle = () => {
    console.log(Object.keys(this.menuData));
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    return (
      <Layout>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.toggle}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ height: "100vh", overflow: "scroll" }}>
          <Header style={{ background: "#fff", padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>页尾xxxxx</Footer>
        </Layout>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  const { list, total, page } = state.users;
  return {
    list,
    total,
    page,
    loading: state.loading.models.users
  };
}

export default connect(mapStateToProps)(Layoutd);
