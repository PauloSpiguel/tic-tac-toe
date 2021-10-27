import styles from "./styles.module.scss";

import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import twitter from "../../assets/images/twitter.svg";

import { ReactComponent as SendIcon } from "../../assets/images/send.svg";

import companyInfo from "../../data/companyInfo.json";

export default function Footer() {
  return (
    <footer className={styles.wrapperContainer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div>
            <h4>About page</h4>
            <ul>
              <li>Play tic tac toe or 4-in-a-row anytime!</li>
              <li>Created by @paulospiguel</li>
            </ul>
          </div>
        </div>
        <div className={styles.center}>
          <div>
            <h4>Contacts</h4>
            <ul>
              <li>{companyInfo.phone_number}</li>
              <li>{companyInfo.address}</li>
            </ul>
          </div>
        </div>
        <div className={styles.right}>
          <div>
            <h4>Stay in touch</h4>
            <ul>
              <li>
                <a href={companyInfo.social.facebook}>
                  <img src={facebook} alt="Facebook Social Media" />
                </a>
              </li>
              <li>
                <a href={companyInfo.social.twitter}>
                  <img src={twitter} alt="Twitter Social Media" />
                </a>
              </li>
              <li>
                <a href={companyInfo.social.instagram}>
                  <img src={instagram} alt="Instagram Social Media" />
                </a>
              </li>
            </ul>
            <form className={styles.subscribeGroup}>
              <input
                type="text"
                name=""
                id=""
                placeholder="Subscribe our games"
              />
              <button type="submit">
                <SendIcon />
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
