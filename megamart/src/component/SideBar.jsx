import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import './component.css'

import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Sider} = Layout;

export default function SideBar() {
    const [collapsed, setCollapsed] = useState(false)

    const toggle = ()=>{
        setCollapsed(!collapsed)
    }

    return (

            <Sider trigger={null} collapsible collapsed={collapsed} className="sider-adjusted" >
                <div className="logo" />
                <Menu theme="white" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                    nav 1
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                    nav 2
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                    nav 3
                </Menu.Item>
                </Menu>
            </Sider>
    )
}
