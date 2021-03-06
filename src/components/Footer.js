import React from "react";
import styles from "./Footer.module.scss";
import logoBig from "../images/logo-big.png";
import facebookLike from "../images/button-facebook-on.gif";
import classnames from "classnames";

export default function Footer() {
  return (
    <footer className={classnames(styles.Footer, "container")}>
      <hr />
      <div className="columns is-vcentered">
        <div className="column is-centered">
          <div>Phone 64 3372 3537</div>
          <div>Click here to email us online</div>
        </div>
        <div className="column">
          <img src={logoBig} alt="te waipounamu" />
        </div>
        <div className="column">
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
