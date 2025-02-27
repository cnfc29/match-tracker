import styles from "./ErrorBox.module.css";
import alertIcon from "../../assets/icons/alert-triangle.svg";
export default function ErrorBox() {
  return (
    <div className={styles.errorBoxContainer}>
      <img src={alertIcon} alt="Alert icon" />
      <div className={styles.text}>Ошибка: не удалось загрузить информацию</div>
    </div>
  );
}
