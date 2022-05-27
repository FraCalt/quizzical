import { nanoid } from "nanoid";
import React from "react";

const styles = {
  right: {
    border: "2px solid rgb(58, 177, 134)",
    backgroundColor: "rgb(174, 243, 229)"
  },
  wrong: {
    border: "2px solid rgb(135, 99, 99, 0.779)",
    backgroundColor:"rgb(236, 139, 139)"
  },
};

const Question = (props: any) => {
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    props.setAnswers((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const renderOptions = props.options.map((option: any, index: number) => {
    return (
      <div
      className="answer-input"
        key={nanoid()}
        style={
          props.highlighted
            ? props.correctAnswers[props.questionIndex] === option
              ? styles.right
              : props.answers["answer"+props.questionIndex] === option
              ? styles.wrong
              : {}
            : {}
        }
      >
        <input
          type="radio"
          name={"answer" + props.questionIndex}
          value={option}
          checked={
            props.options[index] ===
            props.answers["answer" + props.questionIndex]
          }
          disabled={props.highlighted}
          onChange={handleChange}
        />
        {option}
      </div>
    );
  });

  return (
    <div className="questions-box">
      <h3 className="question-element">{props.item.question}</h3>
      <ul className="options-list">{renderOptions}</ul>
      <div className="separator" />
    </div>
  );
};
export default Question;
