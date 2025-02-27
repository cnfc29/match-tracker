import styles from "./Player.module.css";
import playerIcon from "../../assets/icons/player-icon.svg";
export function Player({ player }) {
  return (
    <div className={styles.player}>
      <div className={styles.userName}>
        <img src={playerIcon} alt="Player icon" />
        <div className={styles.name}>{player.username}</div>
      </div>
      <div className={styles.killsContainer}>
        <span className={styles.text}>Убийства:</span>
        <span className={styles.kills}>{player.kills}</span>
      </div>
    </div>
  );
}
