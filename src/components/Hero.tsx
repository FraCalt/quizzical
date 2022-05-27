import React from "react";
import { nanoid } from "nanoid";
import Question from "./Question";
import setArrayOptionsShuffled from "../functions/setArrayOptionsShuffled";
import checkResults from "../functions/checkResults";
import correctAnswersArray from "../functions/correctAnswersArray";

const Hero = (props: any) => {
  const howManyQuestions = 5;
  const [questions, setQuestions] = React.useState([]);
  const [allOptions, setAllOptions] = React.useState<any>([]);
  const [answers, setAnswers] = React.useState([]);
  const [correctAnswers, setCorrectAnswers] = React.useState<any>([]);
  const [score, setScore] = React.useState(0);
  const [showScore, setShowScore] = React.useState(false);

  console.log(props.difficulty);

  const handleCheckResults = () => {
    const result = checkResults(answers, correctAnswers);
    setShowScore(!showScore);
    setScore(result);
  };
  const handleNewGame = () => {
    window.location.reload();
  };

  React.useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=${howManyQuestions}&category=15&difficulty=${props.difficulty}&type=multiple`
    )
      .then((response: any) => response.json())
      .then((data: any) => {
        setQuestions(data.results);
        setArrayOptionsShuffled(data.results, setAllOptions);
        const lastArray = correctAnswersArray(data.results);
        setCorrectAnswers(lastArray);
      });
  }, []);

  const renderQuestions = questions.map((item, index) => (
    <Question
      key={nanoid()}
      item={item}
      questionIndex={index}
      options={allOptions[index]}
      answers={answers}
      setAnswers={setAnswers}
      highlighted={showScore}
      correctAnswers={correctAnswers}
    />
  ));

  return (
    <main>
      <div className="questions-box">
        <h2>{(props.difficulty) + "-mode"}</h2>
        {renderQuestions}
      </div>
      <div className="results-box">
        <h3>{showScore && "Your score:" + score}</h3>
        {showScore ? (
          <button onClick={handleNewGame}>New Game</button>
        ) : (
          <button onClick={handleCheckResults}>Check Results</button>
        )}
      </div>
    </main>
  );
};
export default Hero;
