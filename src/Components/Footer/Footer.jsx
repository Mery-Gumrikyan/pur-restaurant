import Contacts from "./Contacts";
import Subscription from "./Subscription";

import "../Footer/footer.css";

function Footer() {
  return (
    <footer className="footerWrapper">
      <div className="centralize footer">
        <Contacts />
        <Subscription />
      </div>
    </footer>
  );
}

export default Footer;
