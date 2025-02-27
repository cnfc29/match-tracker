import styles from "./Score.module.css";
export function Score({ homeScore, awayScore, status }) {
  const getStatus = (status) => {
    switch (status) {
      case "Ongoing":
        return { text: "Live", backgroundColor: "#43AD28" };
      case "Finished":
        return { text: "Finished", backgroundColor: "#EB0237" };
      case "Scheduled":
        return { text: "Match preparing", backgroundColor: "#EB6402" };
      default:
        return { text: "Unknown", backgroundColor: "#000000" };
    }
  };

  const { text, backgroundColor } = getStatus(status);
  return (
    <div className={styles.scoreContainer}>
      <div className={styles.score}>{homeScore + " : " + awayScore}</div>
      <div className={styles.status} style={{ backgroundColor }}>
        {text}
      </div>
    </div>
  );
}
