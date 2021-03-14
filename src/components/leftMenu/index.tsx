import React from 'react';
import { Link, useLocation } from "react-router-dom"
import './index.css';

/** Left menu - navigation component */
const LeftMenu = () => {
    const location = useLocation();

    return(
        <div className="left-menu">
            <span className={`menu-item ${location.pathname === '/address' && "menu-item-active"}`}>
                <Link to='/address' className="text">
                    Адреса
                </Link>
            </span>
            <span className={`menu-item ${location.pathname === '/transaction' && "menu-item-active"}`}>
                <Link to='/transaction' className="text">
                    Транзакции
                </Link>
            </span>
            
        </div>
    )
}

export default LeftMenu;