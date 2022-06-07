import React, { useEffect, useState } from "react";

import Timer from "./record/Timer";
import LogRep from "./record/LogRep";
import ControlButtons from "./record/ControlButtons";

function Record(props) {
  const [isActive, setIsActive] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [time, setTime] = useState(0);

  const [reps, setReps] = useState([]);

  // Timer functions
  useEffect(() => {
    let interval = null;

    if (!isPaused) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isPaused]);

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleStop = () => {
    setIsActive(false);
    setIsPaused(true);
  };

  // Overall Stats
  let problemCount = reps.length;
  let vSum = reps.reduce((sum, rep) => {
    let value = parseInt(rep.grade.substring(1));

    if (value === 0) {
      value = 1;
    }

    return sum + value;
  }, 0);
  let vAvg = vSum > 0 ? Math.floor(vSum / problemCount) : 0;

  // Rep functions
  const handleAddRep = (newRep) => {
    setReps((prevReps) => {
      return [...prevReps, newRep];
    });
  };

  const handleUndo = () => {
    if (reps.length > 0) {
      if (reps.length === 1) {
        setReps(() => {
          return [];
        });
      } else if (reps.length === 2) {
        setReps((prevReps) => {
          return [prevReps[0]];
        });
      } else {
        setReps((prevReps) => {
          return prevReps.filter((rep, index) => {
            return index < prevReps.length - 1;
          });
        });
      }
    }
  };

  return (
    <div id="Record" className="container">
      <div id="Record-Stats" className="mb-3">
        <Timer time={time} />
        <div className="row">
          <p className="col">Problems: {problemCount}</p>
          <p className="col">Vsum: {vSum}</p>
          <p className="col">AvgV: {vAvg}</p>
        </div>
      </div>
      <main>
        <h2>Session Log:</h2>
        <ul className="list-group">
          {reps.length === 0
            ? "Nothing recorded yet"
            : reps.map((rep, index) => {
                return (
                  <li className="list-group-item" key={index}>
                    <h3>{rep.grade}</h3>
                    <p>{rep.title === "" ? "Tap to add details" : rep.title}</p>
                    <p>{rep.style}</p>
                  </li>
                );
              })}
        </ul>
      </main>
      <footer className="fixed-bottom border-top p-3">
        <div className="d-flex justify-content-between mb-3">
          <LogRep value="V0" handleAddRep={handleAddRep} />
          <LogRep value="V1" handleAddRep={handleAddRep} />
          <LogRep value="V2" handleAddRep={handleAddRep} />
          <LogRep value="V3" handleAddRep={handleAddRep} />
          <LogRep value="V4" handleAddRep={handleAddRep} />
          <LogRep value="V5" handleAddRep={handleAddRep} />
        </div>
        <div className="d-flex justify-content-between mb-3">
          <LogRep value="V6" handleAddRep={handleAddRep} />
          <LogRep value="V7" handleAddRep={handleAddRep} />
          <LogRep value="V8" handleAddRep={handleAddRep} />
          <LogRep value="V9" handleAddRep={handleAddRep} />
          <LogRep value="V10" handleAddRep={handleAddRep} />
          <LogRep value="V11" handleAddRep={handleAddRep} />
        </div>
        <ControlButtons
          active={isActive}
          paused={isPaused}
          handlePauseResume={handlePauseResume}
          handleStop={handleStop}
          handleUndo={handleUndo}
        />
      </footer>
    </div>
  );
}

export default Record;
