import React from "react";
import "./topHeader.css"
import { GoPerson } from "react-icons/go";

export default function TopHeader(){
    return (
    <nav className="nav">
        <a href ="/"  className="site-title"><img src="Logo.png" alt="topHeaderLogo" /></a>
        <ul>
            <CustomLink href ="/Articles" id="norm">Articles</CustomLink>
            <CustomLink href ="/Services" id="norm">Services</CustomLink>
            <CustomLink href ="/AboutUs" id="norm">AboutUs</CustomLink>
            <CustomLink href ="/ContactUs" id="norm">ContactUs</CustomLink>
            <GoPerson id="account-icon"></GoPerson>
            <CustomLink href ="/Account" id="account-btn">Account</CustomLink>
        </ul>
    </nav>
    );
}

function CustomLink({ href, children, ...props}){
    const path = window.location.pathname
    return (
        <li className= {path === href ? "active" : ""}>
            <a href= {href} {...props}>{children}</a>
        </li>
    );
}
