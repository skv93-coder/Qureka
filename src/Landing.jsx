import React from "react";
import { Qs } from "../qss";

export default function () {
  const [start, setstart] = React.useState(false);
  const [category, setcategory] = React.useState("Select no category");
  const [noOfQs, setnoOfQs] = React.useState("Select no of qs");
  const [play, setPlay] = React.useState(false);
  const [name, setname] = React.useState("");
  const [score, setScore] = React.useState(0);
  const handleName = (ev) => {
    setname(ev.target.value);
  };
  const onPlay = () => {
    if (name === "" || name === " ") {
      return;
    }
    if (!start && !play) {
      return;
    }

    setPlay(true);
  };
  const handleChangeOfNo = (ev) => {
    let tem = parseInt(ev.target.value, 10);
    setnoOfQs(tem);
    //console.log(ev.target.value);
  };
  const handleChange = (ev) => {
    setcategory(ev.target.value);
    //  console.log(ev);
  };
  const handleClick = () => {
    setstart(true);
  };
  return (
    <>
      <div>
        <span className="header">Qureka</span>
        {!play && (
          <div className="btn_container">
            {start ? (
              <div className="field_container">
                <input
                  className="input_collection name"
                  type="text"
                  placeholder="name"
                  name="name"
                  id="name"
                  value={name}
                  onChange={handleName}
                />
                <select
                  className="input_collection category"
                  name="category"
                  id="category"
                  value={category}
                  onChange={handleChange}
                >
                  <option value="Select">Select category</option>
                  <option value={17}>Science</option>
                  <option value={9}>Gk</option>
                  <option value={24}>Poltics</option>
                </select>
                <select
                  className="input_collection qs"
                  name="no_qs"
                  id="noOfQs"
                  value={noOfQs}
                  onChange={handleChangeOfNo}
                >
                  <option value="Select">Select no of qs</option>
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                  <option value={20}>20</option>
                </select>
                <button className="lets_play" onClick={onPlay}>
                  Play
                </button>
              </div>
            ) : (
              <button className="new_game" onClick={handleClick}>
                New Game
              </button>
            )}
          </div>
        )}
        {play && (
          <>
            <div className="qustion_container">
              <Qs
                name={name}
                start={start}
                category={category}
                noOfQs={noOfQs}
                play={play}
              />
            </div>
          </>
        )}
        <div className="decri">by Shubham</div>
      </div>
    </>
  );
}
