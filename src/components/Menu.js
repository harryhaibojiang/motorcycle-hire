import React from "react";
import { Link } from "gatsby";
import logo from "../images/logo.png";
import classNames from "classnames";
import styles from "./Menu.module.scss";
import tours from "../content/tours";

const menus = [
  {
    text: "Motorcycle Hire",
    url: "/rental-motorcycles",
  },
  {
    text: "Services",
    url: "/services",
  },
  {
    text: "Guided Tours",
    url: "/guided-tours",
    subMenus: [
      {
        text: "Fred Rau's Tour of the Mountain Kings",
        url: "/guided-tours/tour-of-the-mountain-kings",
      },
      {
        text: "Fully Guided Tour Booking Form",
        url: "/fully-guided-tour-booking-form",
      },
      {
        text: "Tours Additional Information",
        url: "/guided-tours/tours-additional-information",
      },
    ],
  },
  {
    text: "Self-Guided Tours",
    url: "/self-guided-tours",
    subMenus: [
      {
        text: tours.selfGuided[0].title,
        url: "/self-guided-tours/southern-moonlight-tour",
      },
      {
        text: tours.selfGuided[1].title,
        url: "/self-guided-tours/3-week-maori-discovery-tour",
      },
      {
        text: tours.selfGuided[2].title,
        url: "/self-guided-tours/2-week-deluxe-self-guided",
      },
      {
        text: tours.selfGuided[3].title,
        url: "/self-guided-tours/3-week-deluxe-self-guided",
      },
      {
        text: "Tours Additional Information",
        url: "/self-guided-tours/tours-additional-information",
      },
    ],
  },
  {
    text: "About Us",
    url: "/about-us",
  },

  {
    text: "Book",
    url: "/book",
  },
  {
    text: "Contact",
    url: "/contact",
  },
];

export default function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <nav
      className={classNames(
        "navbar",
        "is-primary",
        "is-fixed-top",
        styles.Menu
      )}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a className={classNames("navbar-item", styles.logo)} href="/">
            <img src={logo} width="119" height="112" alt="" />
          </a>
          <a
            role="button"
            className={classNames(
              "navbar-burger",
              { "is-active": open },
              styles.burgerButton
            )}
            onClick={() => setOpen((open) => !open)}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarMenu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          id="navbarMenu"
          className={classNames("navbar-menu ", { "is-active": open })}
        >
          <div className="navbar-start">
            {menus.map((menu) =>
              menu.subMenus ? (
                <div
                  className="navbar-item has-dropdown is-hoverable"
                  key={menu.text}
                >
                  <Link to={menu.url} className="navbar-link">
                    {menu.text}
                  </Link>
                  <div className="navbar-dropdown">
                    {menu.subMenus.map((subMenu) => (
                      <Link
                        to={subMenu.url}
                        className="navbar-item"
                        key={subMenu.text}
                      >
                        {subMenu.text}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link to={menu.url} className="navbar-item" key={menu.text}>
                  {menu.text}
                </Link>
              )
            )}
          </div>
          <div className="navbar-end"></div>
        </div>
      </div>
    </nav>
  );
}
