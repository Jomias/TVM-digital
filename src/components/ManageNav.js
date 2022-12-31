import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import PageContext from '../context/PageContext'

const ManageNav = () => {

    const { path } = useContext(PageContext);
    const list = ['/', '/ourteam', '/industries', '/whychooseus', '/works', '/contact'];
    if (list.includes(path)) {
        return <></>
    }
    const activeClassName = ({ isActive }) => {
        return isActive ? "active" : ""
    }
    const dataNameList = ['services', 'partners', 'industries', 'leaders', 'reasons', 'benefits', 'projects', 'recents', 'proprietarys', 'slideShows'];
    return (
        <div className="container-fluid my-5">
            <ul className="nav nav-pills justify-content-center">
                <NavLink className={`nav-link active`} to="/">
                    Home Page
                </NavLink>
                {dataNameList.map((item, index) => {
                    return (
                        <NavLink className={`nav-link px-3 mx-1 ${activeClassName}`} to={`/manage/${item}`} key={index}>
                            {item}
                        </NavLink>)
                })}
            </ul>
        </div>
    )
}

export default ManageNav;