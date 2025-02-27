import { useState } from "react";
import Header from "../../components/Header/Header";
import MatchesList from "../../components/MatchesList/MatchesList";
import styles from "./MainPage.module.css";
import { useEffect } from "react";
export function MainPage() {
  const [matches, setMatches] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMatches = async () => {
    try {
      const res = await fetch(
        "https://app.ftoyd.com/fronttemp-service/fronttemp"
      );
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setMatches(data.data.matches);
    } catch (error) {
      setError(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMatches();
  }, []);
  return (
    <div className={styles.container}>
      <Header onRefresh={fetchMatches} error={error} />
      {loading ? (
        <div className={styles.loading}>Loading...</div>
      ) : (
        <MatchesList matches={matches} />
      )}
    </div>
  );
}
