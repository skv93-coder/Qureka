import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { ButtonGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function (props) {
  //console.log(props.selected);
  if (!props.arr) {
    //props.fill();
    return null;
  } /*the prog need to be replaced*/
  const { qs, arr, id, updateUserAns, gameover, answer } = props;
  const [selected, setselcted] = React.useState(8);
  const handleClick = (idx, id, ans) => {
    if (!gameover) {
      setselcted(idx);
      updateUserAns(ans, id);
    }
    // console.log(answer);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",

      alignItems: "center",
      "& > *": {
        margin: theme.spacing(1)
      }
    }
  }));
  const classes = useStyles();
  // const theme = createMuiTheme({
  //   overrides: {
  //     // Style sheet name ⚛️
  //     MuiButton: {
  //       // Name of the rule
  //       text: {
  //         // Some CSS
  //         //background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  //         // borderRadius: 3,
  //         // border: 0,
  //         background: ""
  //         //height: 48,
  //         //padding: "0 30px"
  //         //  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  //       }
  //     }
  //   }
  // });
  return (
    <>
      {" "}
      <span className="qs_text">{qs}</span>
      <span className="options_text">
        {
          <div className={classes.root}>
            <ButtonGroup
              size="large"
              colour="defaulet"
              aria-label="large outlined secondary button group"
            >
              <Button
                className="option"
                style={{
                  //padding: "0.5%",
                  backgroundColor: answer === arr[0] ? "green" : "white"
                }}
                color={selected === 0 ? "secondary" : ""}
                onClick={() => handleClick(0, id, arr[0])}
              >
                {arr[0]}
              </Button>

              <Button
                className="option"
                style={{
                  backgroundColor: "grey",
                  //padding: "0.5%",
                  backgroundColor: answer === arr[1] ? "green" : "white"
                }}
                color={selected === 1 ? "secondary" : ""}
                onClick={() => handleClick(1, id, arr[1])}
              >
                {arr[1]}
              </Button>
              <Button
                className="option"
                style={{
                  //padding: "0.5%",
                  backgroundColor: answer === arr[2] ? "green" : "white"
                }}
                color={selected === 2 ? "secondary" : ""}
                onClick={() => handleClick(2, id, arr[2])}
              >
                {arr[2]}
              </Button>
              <Button
                className="option"
                style={{
                  //padding: "0.5%",
                  backgroundColor: answer === arr[3] ? "green" : "white"
                }}
                color={selected === 3 ? "secondary" : ""}
                onClick={() => handleClick(3, id, arr[3])}
              >
                {arr[3]}
              </Button>
            </ButtonGroup>
          </div>
        }
      </span>
    </>
  );
}
