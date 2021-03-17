import React from "react";
import styles from "./Footer.module.scss";
import logoBig from "../images/logo-big.png";
import facebookLike from "../images/button-facebook-on.gif";
import classnames from "classnames";
import { Link } from "gatsby";

export default function Footer() {
  return (
    <footer className={classnames(styles.Footer, "container")}>
      <hr />
      <div className="columns is-vcentered">
        <div className="column is-centered has-text-centered">
          <div>Phone 64 3372 3537</div>
          <div>
            <Link to="/book">Click here to email us online</Link>
          </div>
        </div>
        <div className="column has-text-centered">
          <img src={logoBig} alt="te waipounamu" />
        </div>
        <div className="column has-text-centered">
          <a
            href="https://www.facebook.com/motorcycletours.nz/"
            target="_blank"
          >
            <img src={facebookLike} alt="te waipounamu facebook" />
          </a>
        </div>
      </div>
    </footer>
  );
}
