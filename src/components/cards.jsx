import React from "react";
import "./cards.css";
import { Rating } from "@mui/material";

function Cards() {
    return (
        <div className="cards-container">
            <div className="cards">
            <Rating name="read-only" value={5} readOnly />
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none">
                    <path d="M11.5526 0L14.751 6.8872L22.2895 7.80085L16.7278 12.971L18.1884 20.4229L11.5526 16.731L4.91676 20.4229L6.37735 12.971L0.815609 7.80085L8.3541 6.8872L11.5526 0Z" fill="#FFC633" />
                </svg> */}
            </div>
        </div>
    )
}
export default Cards;