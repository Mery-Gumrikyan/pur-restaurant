import { Link } from "react-router";

function Logo() {
  return (
    <div>
      <Link to={"/"}>
        <img className="logo" src="/images/logo.png" alt="Pur Restaurant"></img>
      </Link>
    </div>
  );
}

export default Logo;
