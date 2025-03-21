import React from "react";
import "./topHeader.css"
import { Link, Outlet } from "react-router-dom";

export default function TopHeader(){
    return (
        <>
    <nav className="nav">
        <Link to ="/" className="site-title">ConfirmDen</Link>
        <ul>
            <Link to ="/Home">Home</Link>
            <Link to ="/Articles">Articles</Link>
            <Link to ="/Services">Services</Link>
            <Link to ="/AboutUs">AboutUs</Link>
            <Link to ="/ContactUs">ContactUs</Link>
            <Link to ="/Account">Account</Link>
        </ul>
    </nav>
    <Outlet />
    </>
    );
}

/*function CustomLink({ to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive  = useMatch({ path: resolvedPath.pathname, end: true})
    return (
        <li className= {isActive ? "active" : ""}>
            <Link to= {to} {...props}>{children}</Link>
        </li>
    )
}*/