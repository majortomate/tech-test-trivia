import { useEffect, useState } from "react";

function Trivia() {
  const [getData, setGetData] = useState([]);
  const [answers, getAnswers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://the-trivia-api.com/api/questions?limit=10")
        .then((res) => res.json())
        .then((data) => setGetData(data.slice(-5)));
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const allAnswers = [...answers, e.target.value];
    getAnswers(allAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const results = getData.filter((element) => {
      return answers.includes(element.correctAnswer);
    });
    console.log(results);
    alert(`you got ${results.length} correct answers`);
  };

  return (
    <div>
      <h1>Trivia</h1>
      <>
        {getData &&
          getData.map((question) => (
            <div key={question.id}>
              <p>
                <strong>{question.category}</strong>
              </p>
              <p>{question.question}</p>
              <select name="questions" onChange={handleChange} required>
                <option>Please Select one</option>
                {question.incorrectAnswers.map((answer, index) => (
                  <option key={index} value={answer}>
                    {answer}
                  </option>
                ))}
                <option value={question.correctAnswer}>
                  {question.correctAnswer}
                </option>
              </select>
            </div>
          ))}
      </>
      <button type="button" onClick={handleSubmit}>
        Show results
      </button>
    </div>
  );
}

export default Trivia;
