import React from "react";
import logo from "../assets/gitpeeklogo.png";

const Logo = (props) => {
    return (
        <>
            <img
                src={logo}
                alt='GitPeek'
                height={props.height}
                width={props.width}
            />
        </>
    );
};

export default Logo;