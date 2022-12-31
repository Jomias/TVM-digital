import React from 'react'
import usePath from '../../hooks/usePath';

const style = {
    color: "blue",
    padding: "10px",
    marginTop: "200px",
    textAlign: "center",
    width: "100%"
};

const Manage = () => {

    usePath(window.location.pathname);
    return (
        <h1 style={style}>WELCOME TO MANAGE PAGE</h1>
    )
}

export default Manage;