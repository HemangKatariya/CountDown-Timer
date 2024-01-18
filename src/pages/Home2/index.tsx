import React, { useEffect, useState } from "react";
import CancelIcon from "../../components/icons/CancelIcon";
import PauseIcon from "../../components/icons/PauseIcon";
import PlayIcon from "../../components/icons/PlayIcon";
import "./index.css";

const Home2: React.FC = () => {
  const [minutes, setMinutes] = useState<number | undefined>(undefined);
  const [seconds, setSeconds] = useState<number>(0);
  const [milliseconds, setMilliseconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [time, setTime] = useState<number | undefined>(undefined);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        if (milliseconds > 0) {
          setMilliseconds((ms) => ms - 1);
        } else if (seconds > 0) {
          setSeconds((s) => s - 1);
          setMilliseconds(99);
        } else if (minutes != undefined && minutes > 0) {
          setMinutes((m) => (m !== undefined ? m - 1 : undefined));
          setSeconds(59);
          setMilliseconds(99);
        } else {
          setIsRunning(false);
        }
        clearInterval(interval);
      }, 10);
    }
  }, [isRunning, minutes, seconds, milliseconds]);

  const handleSubmit = () => {
    if (time != undefined && time > 0) {
      setMinutes(time);
      setIsRunning(true);
      setTime(0);
    } else {
      setTime(0);
      alert("Please Enter Positive value");
      setIsRunning(false);
    }
  };
  const handleCancel = () => {
    setTime(0);
    setMinutes(0);
    setSeconds(0);
    setMilliseconds(0);
  };
  return (
    <>
      <div className="background">
        <div className="main">
          <h2 className="H2">| Countdown Timer |</h2>
          <div className="Box-group">
            <div className="box">
              <div className="Text">Minutes</div>
              <h1 className="Number">
                {minutes !== undefined
                  ? isNaN(minutes)
                    ? "00"
                    : minutes
                  : "00"}
              </h1>
            </div>
            <div className="box">
              <div className="Text">Seconds</div>
              <h1 className="Number">{seconds === 0 ? "00" : seconds}</h1>
            </div>
            <div className="box">
              <div className="Text">MilliSeconds</div>
              <h1 className="Number">
                {milliseconds === 0 ? "00" : milliseconds}
              </h1>
            </div>
          </div>
          <div className="InputAndSubmit">
            <input
              type="number"
              placeholder="Enter Minutes"
              value={time}
              onChange={(event) => setTime(parseInt(event.target.value, 10))}
            />
          </div>
          <div className="icons">
            <div>
              {isRunning === false && milliseconds === 0 ? (
                <button className="submit" onClick={handleSubmit}>
                  Start
                </button>
              ) : (
                <button className="submitDisabled" disabled>
                  Start
                </button>
              )}
            </div>
            <button className="submit" onClick={handleCancel}>
              <CancelIcon color="black" size={20} />
            </button>
            <div>
              {isRunning == false ? (
                <button className="submit" onClick={() => setIsRunning(true)}>
                  <PlayIcon color="black" size={20} />
                </button>
              ) : (
                <button className="submit" onClick={() => setIsRunning(false)}>
                  <PauseIcon color="black" size={20} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home2;
