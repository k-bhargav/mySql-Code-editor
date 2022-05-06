import { Link } from "react-router-dom";
import "./sideBar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h1 className="sidebarTitleHello">Select from below</h1>
          <h1 className="sidebarTitle">Code Playground</h1>
          <ul className="sidebarList">
            <Link to="/" style={{ textDecoration: "none" }}>
              <li className="sidebarListItem ">
                <img
                  alt="sidebar-categories"
                  className="sidebarIcon"
                  style={{ height: 30, width: 30 }}
                  src="Images\laptop.png"
                />
                Execute SQL .
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Available Tables</h3>
          <ul className="sidebarList">
            <Link to="/address" style={{ textDecoration: "none" }}>
              <li className="sidebarListItem">
                <img
                  alt="sidebar-categories"
                  className="sidebarIcon"
                  style={{ height: 30, width: 30 }}
                  src="Images\location.png"
                />
                Adresses table
              </li>
            </Link>
            <Link to="/debitCard" style={{ textDecoration: "none" }}>
              <li className="sidebarListItem">
                <img
                  alt="sidebar-categories"
                  className="sidebarIcon"
                  style={{ height: 30, width: 30 }}
                  src="Images\debit-card.png"
                />
                Debit cards
              </li>
            </Link>
            <Link to="/upi" style={{ textDecoration: "none" }}>
              <li className="sidebarListItem">
                <img
                  alt="sidebar-categories"
                  className="sidebarIcon"
                  style={{ height: 30, width: 30 }}
                  src="Images\mobile-payment.png"
                />
                Saved UPI
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
