import React, { useState } from 'react';

const Sidebar = () => {
    const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");

    const changeStyle = () => {
        if (style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled");
        }
        else{
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };
    const changeStyle1 = () => {
        if (style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1");
        }
        else{
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };

    return (
        <ul className={style} id="accordionSidebar">
            {/*  <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                        <div className="sidebar-brand-icon rotate-n-15">
                            {/* <i className="fas fa-laugh-wink"></i> */}
                        </div>
                        <div className="sidebar-brand-text mx-3">KCC</div>
                        <div className="text-center d-none d-md-inline">
                        <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
                    </div>
                    </a>

                    {/*   <!-- Divider --> */}
                    <hr className="sidebar-divider my-0" />

                    {/*  <!-- Nav Item - Dashboard --> */}
                    <li className="nav-item active">
                        <a className="nav-link" href="index.html">
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span></a>
                    </li>

                    {/*  <!-- Divider --> */}
                    <hr className="sidebar-divider" />

                    {/*   <!-- Heading --> */}
                    <div className="sidebar-heading">
                        Interface
                    </div>

                    {/*  <!-- Nav Item - Pages Collapse Menu --> */}

                    {/*  <!-- Nav Item - Tables --> */}
                    <li className="nav-item">
                        <a className="nav-link" href="">
                            <i className="fas fa-fw fa-table"></i>
                            <span>Applications</span></a>
                    </li>

                    {/* <!-- Divider --> */}
                    <hr className="sidebar-divider d-none d-md-block" />

            </ul>
    );
};

export default Sidebar;