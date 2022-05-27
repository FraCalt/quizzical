const Start = (props: any) => {
  const handleChange = (event: any) => {
    const { value } = event.target;
    props.setDifficulty(value);
  };

  return (
    <div>
      <h1>Quizzical</h1>
      <p>
        Welcome to <strong>Quizzical</strong>, the quiz game!
        Answer the questions and check your knowledge about Video Games Culture.
        Choose a difficulty:
        <select onChange={handleChange} >
          <option value="easy">Easy Mode</option>
          <option value="medium">Medium Mode</option>
          <option value="hard">Hard Mode</option>
        </select>
      </p>
      <button onClick={() => props.setShowQuiz((prevState: any) => !prevState)}>
        Start Quiz
      </button>
    </div>
  );
};
export default Start;
