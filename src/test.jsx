import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const style = {
    container: {
        padding: '20px',
        border: '1px solid #E0E0E0',
        borderRadius: '15px',
        width: 'max-content',
        marginBottom: '40px',
    },
    question: {
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    options: {
        marginBottom: '5px',
    },
    button: {
        marginTop: '10px',
        padding: '10px 15px',
        border: 'none',
        backgroundColor: '#007BFF',
        color: '#FFF',
        fontSize: '14px',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    feedback: {
        marginTop: '10px',
        fontSize: '14px',
    },
};

function QuizApp() {
    const [showScore, setShowScore] = useState(false)
    const [questionSeries, setQuestionSeries] = useState(0);
    const [val, setValue] = useState("")
    const [score, setScore] = useState({
        score: 0,
        correctAnswers: 0,
    });
    const [answerState, setAnswerState] = useState("")
    // do not modify the questions or answers below
    const questions = [
        {
            question: 'What is the capital of France?',
            options: ['London', 'Paris', 'Berlin', 'Madrid'],
            correct: 'Paris',
        },
        {
            question: 'What is the capital of Germany?',
            options: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg'],
            correct: 'Berlin',
        },
    ];

    function onAnswer(e) {
        setValue(e.target.value)
    }

    function onSubmitAnswer() {
        if (val === "") {
            setAnswerState("please select one")
        } else {
            if (val === questions[questionSeries].correct) {
                setAnswerState("Correct Answer!")
                setScore((prev) => {
                    return { ...prev, score: prev.score++, correctAnswers: prev.correctAnswers++ }
                })
                setShowScore(true)
            } else {
                setAnswerState("Wrong Answer!")
            }

            if (questions.length === questionSeries + 1) {
                console.log("hel")
                setShowScore(true)
            } else {
                console.log("bel")
                setTimeout(() => { setQuestionSeries(questionSeries + 1); setShowScore(false) }, 1000)
            }
        }
    }

    return (
        <div style={style.container}>
            <div id="question" style={style.question}></div>
            <div style={style.options}></div>
            <div>
                <h1>{questions[questionSeries].question}</h1>
                {questions[questionSeries].options.map((e, i) => {
                    return (
                        <div key={e}>
                            <input type="radio" id={"radio" + i} onChange={onAnswer} value={e} name="options" />
                            <label htmlFor={"radio" + i}>{e}</label>
                        </div>
                    )
                })}
            </div>
            <button style={style.button} id="submitBtn" onClick={onSubmitAnswer}>
                Submit
            </button>
            <div id="feedback" style={style.feedback}>{answerState} {showScore && score.score}</div>
            {(questions.length === questionSeries - 1) &&
                (['<h1>You have given {score.correctAnswer} correct answer and Your score is {score.score}</h1>'])}
        </div>
    );
}

export default QuizApp