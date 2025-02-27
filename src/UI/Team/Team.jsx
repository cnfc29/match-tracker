import styles from "./Team.module.css";
import teamIcon from "../../assets/icons/team-icon.svg";
import arrowUp from "../../assets/icons/arrow-up.svg";
import arrowDown from "../../assets/icons/arrow-down.svg";

export function Team({ home, name, show, onClick }) {
  const arrowIcon = show ? arrowUp : arrowDown;

  return (
    <div className={styles.teamContainer}>
      {home && <img src={teamIcon} alt="Team icon" />}

      <div className={styles.name}>{name}</div>

      {!home && (
        <>
          <img src={teamIcon} alt="Team icon" />
          <img onClick={onClick} src={arrowIcon} alt="Arrow icon" />
        </>
      )}
    </div>
  );
}
