import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles["page-footer"]}>
      <h2>Footer</h2>
      <span>Phone: </span>651-271-6005
      <br />
      <span>Email: </span>august.johnson980@gmail.com
      <br />
      <a href="">My GitHub</a>
      <br />
      <a href="">LinkedIn</a>
      <br />
      <a href="">Resume</a>
    </footer>
  );
};

export default Footer;
