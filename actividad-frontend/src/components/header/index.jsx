import { Avatar } from "@mui/material";
import zaraLogo from "../../assets/images/zara-logo.svg";
import { Placeholder } from "../placeholder";
import "./style.css";

export const Header = () => {

    const onClick = () => {
        window.location.reload();
    }

    return (
        <div className="header">
            <div className="header__logo">
                <img src={zaraLogo} alt="Zara" data-testid="zara-logo" onClick={onClick} />
            </div>
            <div className="header__avatar">
                <Avatar>LU</Avatar>
            </div>
        </div>
    )
}