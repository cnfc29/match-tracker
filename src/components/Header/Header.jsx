import Button from "../../UI/Button/Button";
import ErrorBox from "../../UI/ErrorBox/ErrorBox";
import styles from "./Header.module.css";
export default function Header({ error, onRefresh }) {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logo}>Match Tracker</div>
      <div className={styles.infoContainer}>
        {error && <ErrorBox />}
        <Button onClick={onRefresh} />
      </div>
    </div>
  );
}
