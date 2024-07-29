import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import './component.css'



export default function SideBar() {
    const [collapsed, setCollapsed] = useState(false)
    
    const toggle = ()=>{
        setCollapsed(!collapsed)
    }

    return (
        <div class="container-fluid new_sider">
    <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 ">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <Link to="#" class="nav-link align-middle px-0">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Dashboard</span> </Link>
                    </li>
                    <li>
                        <Link to="#" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Orders</span></Link>
                    </li>
                    <li>
                        <Link to="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Products</span> </Link>
                    </li>
                    <li>
                        <Link to="#" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Customers</span> </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
    )
}
