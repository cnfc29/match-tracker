import styles from "./Button.module.css";
import refresh from "../../assets/icons/Refresh.svg";
export default function Button({ onClick }) {
  return (
    <button onClick={onClick}>
      Обновить
      <img src={refresh} alt="Refresh icon" />
    </button>
  );
}
