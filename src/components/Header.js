import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="data:image/png;base64,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" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus ? "✅" : "❌"} </li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>

                </ul>
            </div>
        </div>
    );
}

export default Header;