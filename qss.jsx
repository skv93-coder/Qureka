import React from "react";
import Qss from "./qs";
import axios from "axios";
// export default function BasicButtonGroup() {
//   const classes = useStyles();
// const random = (options, ans) => {
//   let arr = [];
//   let random = Math.floor(Math.random() * 4);
//   let ptr = 0;
//   for (let i = 0; i < 4; i++) {
//     if (i === random) {
//       arr.push(ans);
//     } else {
//       arr.push(options[ptr++]);
//     }
//   }
//   return arr;
// };

let data = require("./data/data.json");

const Qs = (props) => {
  const [qsutions, setqs] = React.useState(data.results);

  const [answered, setanswered] = React.useState([]);
  const [score, setScore] = React.useState(0);
  const [Ans, setAns] = React.useState([]);
  const [gameover, setgameover] = React.useState(false);

  const { name, noOfQs, play, start, category } = props;

  const calculateScore = () => {
    let copyscore = 0;
    for (let i = 0; i < results.length; i++) {
      if (answered[i]) {
        if (Ans[i] === answered[i]) {
          copyscore++;
        }
      }
    }
    setgameover(true);
    setScore(copyscore);
  };
  const updateUserAns = (ans, idx) => {
    let copyanswered = [...answered];
    copyanswered[idx] = ans;

    setanswered(copyanswered);
  };
  const fill = () => {
    let origData = [];
    axios({
      url: "https://opentdb.com/api.php",
      params: {
        category: category,
        amount: noOfQs,
        type: "multiple",
        difficulty: "easy"
      }
    }).then((dataa) => {
      //  data = JSON.stringify(dataa);
      //for(let k=0;k<dat)
      // console.log(category, noOfQs);
      data = dataa.data;

      //console.log(data);
      let resultss = [...data.results];
      let results1 = [];
      for (let i = 0; i < data.results.length; i++) {
        let random = Math.floor(Math.random() * 4);
        resultss[i].selected = false;
        let arr1 = resultss[i].incorrect_answers;
        let ans = resultss[i].correct_answer;
        let arr = [];
        let ptr = 0;
        for (let j = 0; j < 4; j++) {
          if (j === random) {
            results1.push(ans);
            arr.push(ans);
          } else {
            arr.push(arr1[ptr++]);
          }
        }
        resultss[i].arr = arr;
      }

      setqs(resultss);
      setAns(results1);
    });
  };
  React.useEffect(() => {
    fill();
  }, []);

  // const { name, noOfQs, play, start, category } = props;

  if (data.response === 0) {
    return;
  }
  const { results } = data;
  return (
    <>
      <div className="score">{score}</div>
      {qsutions.map((qs, idx) => (
        <div className="qs">
          <Qss
            gameover={gameover}
            updateUserAns={updateUserAns}
            fill={fill}
            selected={qs.selected}
            key={qs.correct_answer}
            id={idx}
            qs={qs.question}
            arr={qs.arr}
            answer={gameover ? qs.correct_answer : null}
            option={qs.incorrect_answers}
          />
        </div>
      ))}
      <button className="submit" onClick={calculateScore}>
        Submit
      </button>
    </>
  );
};
export { Qs };
