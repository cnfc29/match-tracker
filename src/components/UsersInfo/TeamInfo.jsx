import { Player } from "../Player/Player";
import styles from "./TeamInfo.module.css";
export function TeamInfo({ match }) {
  return (
    <div className={styles.teamInfoContainer}>
      <div className={styles.homeTeam}>
        <div className={styles.players}>
          {match.homeTeam.players.map((player, index) => (
            <Player key={`${player.username + index}`} player={player} />
          ))}
        </div>
        <div className={styles.teamInfo}>
          <span className={styles.text}>
            Points:{" "}
            <span className={styles.number}>{match.homeTeam.points}</span>
          </span>
          <span className={styles.text}>
            Место: <span className={styles.number}>{match.homeTeam.place}</span>
          </span>
          <span className={styles.text}>
            Всего убийств:{" "}
            <span className={styles.number}>{match.homeTeam.total_kills}</span>
          </span>
        </div>
      </div>
      <div className={styles.awayTeam}>
        <div className={styles.players}>
          {match.awayTeam.players.map((player, index) => (
            <Player key={`${player.username + index}`} player={player} />
          ))}
        </div>
        <div className={styles.teamInfo}>
          <span className={styles.text}>
            Points:{" "}
            <span className={styles.number}>{match.awayTeam.points}</span>
          </span>
          <span className={styles.text}>
            Место: <span className={styles.number}>{match.awayTeam.place}</span>
          </span>
          <span className={styles.text}>
            Всего убийств:{" "}
            <span className={styles.number}>{match.awayTeam.total_kills}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
