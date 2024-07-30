
import React, { useState } from 'react';
import { Menu, Drawer, Button } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined, MenuOutlined } from '@ant-design/icons';
import './component.css'
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const SideBar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button
        type="primary"
        icon={<MenuOutlined />}
        onClick={showDrawer}
        style={{ display: 'none', margin: '16px' }}
        className="sidebar-button"
      />
      <Drawer title="Sidebar" placement="left" onClose={onClose} visible={visible}>
        <Menu mode="inline" items={items2} onClick={onClose} />
      </Drawer>
      <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0, left: 0 }} items={items2} className="sidebar-desktop" />
    </>
  );
};

export default SideBar;
