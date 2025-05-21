import { useState } from "react";
import Ad from "../Components/Ad";
import SideNav from "../Components/SideNav";
import Footer from "../Components/Footer";
import "./QuizPage.css";

function QuizPage() {
  const [showFlashcards, setShowFlashcards] = useState(true);
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);
  const [flashcardRevealed, setFlashcardRevealed] = useState(false);

  const [currentMCIndex, setCurrentMCIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const flashcards = [
    {
      question: "What is Paracetamol used for?",
      answer: "Pain relief and fever reduction.",
    },
    { question: "Name a common antibiotic.", answer: "Amoxicillin." },
    { question: "What is Ibuprofen?", answer: "An anti-inflammatory drug." },
    { question: "What condition does Metformin treat?", answer: "Diabetes." },
    { question: "What does Cetirizine relieve?", answer: "Allergy symptoms." },
  ];

  const multipleChoice = [
    {
      question: "Which medicine is used to treat bacterial infections?",
      options: ["Paracetamol", "Amoxicillin", "Ibuprofen", "Cetirizine"],
      correctAnswer: "Amoxicillin",
    },
    {
      question: "What is the function of Ibuprofen?",
      options: ["Antibiotic", "Anti-inflammatory", "Vitamin", "Antihistamine"],
      correctAnswer: "Anti-inflammatory",
    },
    {
      question: "Which drug helps with allergy relief?",
      options: ["Metformin", "Cetirizine", "Loperamide", "Dolfenal"],
      correctAnswer: "Cetirizine",
    },
    {
      question: "What type of medication is Metformin?",
      options: [
        "Pain Reliever",
        "Diabetes Medication",
        "Antidepressant",
        "Antacid",
      ],
      correctAnswer: "Diabetes Medication",
    },
    {
      question: "What is Loperamide used for?",
      options: [
        "Cold Relief",
        "Pain Relief",
        "Diarrhea Control",
        "Blood Pressure Control",
      ],
      correctAnswer: "Diarrhea Control",
    },
  ];

  function toggleFlashcard() {
    setFlashcardRevealed(!flashcardRevealed);
  }

  function nextFlashcard() {
    setFlashcardRevealed(false);
    setCurrentFlashcardIndex((prev) => (prev + 1) % flashcards.length);
  }

  function handleOptionChange(e) {
    setSelectedOption(e.target.value);
  }

  function handleSubmit() {
    if (selectedOption === "") {
      alert("Please select an option before submitting.");
      return;
    }

    if (selectedOption === multipleChoice[currentMCIndex].correctAnswer) {
      setScore((prev) => prev + 1);
    }

    setSelectedOption("");

    if (currentMCIndex + 1 < multipleChoice.length) {
      setCurrentMCIndex(currentMCIndex + 1);
    } else {
      setShowScore(true);
    }
  }

  function handleRestart() {
    setShowScore(false);
    setCurrentMCIndex(0);
    setScore(0);
    setSelectedOption("");
  }

  return (
    <>
      <Ad />
      <div
        style={{
          display: "flex",
          height: "100vh",
        }}
      >
        <SideNav />
        <div
          style={{
            flexGrow: 1,
            padding: "1rem 2rem 2rem 10rem",
            overflowY: "auto",
          }}
        >
          <h1 className="text-center">Knowledge Test</h1>

          <div className="mb-4 text-center">
            {showFlashcards ? (
              <button
                className="btn btn-primary"
                onClick={() => {
                  setShowFlashcards(false);
                  setShowScore(false);
                  setCurrentMCIndex(0);
                  setScore(0);
                  setSelectedOption("");
                }}
              >
                Multiple Choice
              </button>
            ) : (
              <button
                className="btn btn-secondary"
                onClick={() => setShowFlashcards(true)}
              >
                FlashCards
              </button>
            )}
          </div>

          {showFlashcards && (
            <div
              className="container d-flex flex-column align-items-center"
              style={{ maxWidth: "600px", margin: "0 auto" }}
            >
              <div
                className="card flashcard p-4 mb-3"
                onClick={toggleFlashcard}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && toggleFlashcard()}
              >
                <h4
                  className="card-title text-center"
                  style={{ fontSize: "2rem", fontWeight: "700" }}
                >
                  {flashcards[currentFlashcardIndex].question}
                </h4>
                {flashcardRevealed && (
                  <p className="answer-text text-center">
                    {flashcards[currentFlashcardIndex].answer}
                  </p>
                )}
              </div>
              <button
                className="btn btn-outline-primary btn-lg"
                onClick={nextFlashcard}
                style={{ width: "120px" }}
              >
                Next
              </button>
            </div>
          )}

          {!showFlashcards && (
            <div
              className="container"
              style={{ maxWidth: "600px", margin: "0 auto" }}
            >
              {!showScore ? (
                <div className="multiple-choice-card">
                  <h4
                    className="mb-4"
                    style={{
                      fontWeight: "700",
                      fontSize: "1.8rem",
                      color: "#0d6efd",
                    }}
                  >
                    {multipleChoice[currentMCIndex].question}
                  </h4>
                  <form>
                    {multipleChoice[currentMCIndex].options.map((option, i) => (
                      <div className="form-check mb-3" key={i}>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="multipleChoice"
                          id={`option${i}`}
                          value={option}
                          checked={selectedOption === option}
                          onChange={handleOptionChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`option${i}`}
                        >
                          {option}
                        </label>
                      </div>
                    ))}
                  </form>
                  <button
                    className="btn btn-primary mt-3 btn-lg"
                    onClick={handleSubmit}
                    disabled={selectedOption === ""}
                    style={{ width: "120px" }}
                  >
                    Submit
                  </button>
                </div>
              ) : (
                <div className="text-center fade-in">
                  <p className="score-text mb-4">
                    Your Score: {score} / {multipleChoice.length}
                  </p>
                  <button
                    className="btn btn-secondary btn-lg"
                    onClick={handleRestart}
                  >
                    Restart
                  </button>
                </div>
              )}
            </div>
          )}
          <div style={{ position: "absolute", bottom: "0", width: "87%" }}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default QuizPage;
