import { useState } from "react";
import { ScoreContainer } from "../ScoreContainer/ScoreContainer";
import styles from "./MatchCard.module.css";
import { TeamInfo } from "../UsersInfo";
export function MatchCard({ match }) {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.matchCardContainer}>
      <ScoreContainer
        match={match}
        show={show}
        onClick={() => setShow(!show)}
      />
      {show && <TeamInfo match={match} />}
    </div>
  );
}
