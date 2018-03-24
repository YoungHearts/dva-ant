import { Menu, Icon } from 'antd';
import Link from 'umi/link';

function Header({ location }) {
  return (
    <Menu
      selectedKeys={[location.pathname]}
      mode="horizontal"
      theme="dark"
    >
    <Menu.Item key="/">
      <Link to="/"><Icon type="home" />主页</Link>
    </Menu.Item>
      <Menu.Item key="/users">
        <Link to="/users"><Icon type="bars" />会员管理</Link>
      </Menu.Item>
      <Menu.Item key="/win">
        <Link to="/win"><Icon type="bars" />中奖明细</Link>
      </Menu.Item>
      <Menu.Item key="/order">
        <Link to="/users"><Icon type="bars" />订单管理</Link>
      </Menu.Item>
    </Menu>
  );
}

export default Header;