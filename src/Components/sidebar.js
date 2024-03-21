import React from "react";

import { Link } from "react-router-dom";

const Sidebar=()=>{

    return(
        <nav style={{
            display:"flex",
            height:"100vh",
            width:"12vw",
          background:"#D3D3D3",
          padding:"10px",
          boxSizing:"border-box"
      
        }}>
            <Link to="/">Home</Link>
        </nav>
    )
}


export default Sidebar;