import styles from "./ScoreContainer.module.css";
import { Team } from "../../UI/Team";
import { Score } from "../../UI/Score/Score";
export function ScoreContainer({ match, show, onClick }) {
  return (
    <div className={styles.scoreContainer}>
      <Team home name={match.homeTeam.name} />
      <Score
        homeScore={match.homeScore}
        awayScore={match.awayScore}
        status={match.status}
      />
      <Team name={match.awayTeam.name} show={show} onClick={onClick} />
    </div>
  );
}
