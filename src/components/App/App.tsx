import { useState } from "react";
import css from "./App.module.css";
import CafeInfo from "./CafeInfo/CafeInfo";
import { VoteType, Votes } from "../App/types/votes";

function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const handleVote = (type: VoteType) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1,
    }));
  };
  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  return (
    <div className={css.app}>
      <CafeInfo />
      {}
    </div>
  );
}
export default App;
