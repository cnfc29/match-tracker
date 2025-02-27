import { MatchCard } from "../MatchCard/MatchCard";
import styles from "./MatchesList.module.css";

export default function MatchesList({ matches }) {
  return (
    <div className={styles.matchesListContainer}>
      {matches?.map((match, index) => (
        <MatchCard key={`${match.title + index}`} match={match} />
      ))}
    </div>
  );
}
