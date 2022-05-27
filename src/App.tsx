import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Start from "./components/Start";
import circleStyles from "./style/circleStyle";
import "./style.css";

const App = () => {
  const [showQuiz, setShowQuiz] = React.useState(false);
  const [difficulty, setDifficulty] = React.useState("easy");

  return (
    <div className="app-container">
      <div
        className="background-circle"
        style={{ ...circleStyles.green, margin: "25% 70%" }}
      />
      <div
        className="background-circle"
        style={{ ...circleStyles.blue, margin: "30% 40%" }}
      />
      <div
        className="background-circle"
        style={{ ...circleStyles.red, margin: "10% 5%" }}
      />
      <div
        className="background-circle"
        style={{ ...circleStyles.yellow, margin: "10% 80%" }}
      />
      <div className="background-circle" />
      <Header />
      {showQuiz ? (
        <div className="hero-container">
          <Hero difficulty={difficulty} />
        </div>
      ) : (
        <div className="start-container">
          <Start setShowQuiz={setShowQuiz} setDifficulty={setDifficulty} />
        </div>
      )}
      <Footer />
    </div>
  );
};
export default App;
