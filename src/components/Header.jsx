import "../styles/Header.scss";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <header>
        <div className="whattsapp-contact">
          <WhatsAppIcon />
          +92 1234567890
        </div>
        <div className="others-contact">
          <Link to={"/"}>
            <TwitterIcon />
          </Link>
          <Link to={"/"}>
            <FacebookIcon />
          </Link>
          <Link to={"/"}>
            <YouTubeIcon />
          </Link>
          <Link to={"/"}>
            <InstagramIcon />
          </Link>
          <Link to={"/"}>
            <PinterestIcon />
          </Link>
        </div>
        <div className="reg">
          <Link className="register">
            <PersonAddIcon />
            Register
          </Link>
          <Link className="login">
            <LoginIcon />
            Login
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;

// logo link: https://www.migdigitizing.com/images/migdigitizing-logo.svg