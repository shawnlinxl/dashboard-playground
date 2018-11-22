import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

// antd
import { Layout, Menu, Icon } from "antd";
import { sidebarData, groupKey } from "./config.js";

const { Sider } = Layout;
const { SubMenu, Item } = Menu;

class Sidebar extends Component {
  state = {
    openKeys: [""],
    selectedKeys: [""],
    rootSubmenuKeys: groupKey,
    itemName: "",
    collapsed: false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  setDefaultActiveItem = ({ location }) => {
    const { pathname } = location;
    sidebarData.map(item => {
      if (item.pathname) {
        // menu only have one level
      }
      if (item.children && item.children.length > 0) {
        item.children.map(childitem => {
          // using match because url can have parameters
          if (pathname.match(childitem.path)) {
            this.setState({
              openKeys: [item.key],
              selectedKeys: [childitem.key]
            });
            // set title
            document.title = childitem.text;
          }
        });
      }
    });
  };

  componentDidMount = () => {
    this.setDefaultActiveItem(this.props);
  };

  OpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    );

    if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [...openKeys]
      });
    }
  };

  render() {
    const { openKeys, selectedKeys } = this.state;

    const SideTree = sidebarData.map(item => (
      <SubMenu
        key={item.key}
        title={
          <span>
            <Icon type={item.title.icon} />
            <span>{item.title.text}</span>
          </span>
        }
      >
        {item.children &&
          item.children.map(menuItem => (
            <Item
              key={menuItem.key}
              onClick={() => {
                // highlight selection
                this.setState({ selectedKeys: [menuItem.key] });
                // set page title
                document.title = menuItem.text;
              }}
            >
              <Link to={menuItem.path}>{menuItem.text}</Link>
            </Item>
          ))}
      </SubMenu>
    ));

    return (
      <Sider
        collapsible
        breakpoint="lg"
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <Menu
          subMenuOpenDelay={0.3}
          theme="dark"
          openKeys={openKeys}
          selectedKeys={selectedKeys}
          mode="inline"
          onOpenChange={this.OpenChange}
        >
          {SideTree}
        </Menu>
      </Sider>
    );
  }
}

export default withRouter(Sidebar);
