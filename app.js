let questions = [
    {
        text: "Who created Facebook?",
        answers: ["Bill Gates", "Mark Zukerberg", "Jeff Bezos", "Daniel Sam"],
        correctAnswer: 1
    }, 
    {
        text: "Who is the richest man in the world?",
        answers: ["Bill Gates", "Mark Zukerberg", "Jeff Bezos", "Elon Musk"],
        correctAnswer: 3
    },
];

let quiz = document.querySelector("#quiz");

for (let i = 0; i < questions.length; i++) {
    let questionDiv = document.createElement("div");
    let question = document.createElement("p");
    question.innerText = questions[i].text;
    questionDiv.appendChild(question);

    for (let y = 0; y < questions[i].answers.length; y++) {
        let answer = document.createElement("input");
        answer.type = "radio";
        let answerText = document.createElement("label");
        answerText.innerText = questions[i].answers[y];
        questionDiv.appendChild(answer);
        questionDiv.appendChild(answerText);
    }
    quiz.appendChild(questionDiv);
}

let submitForm = document.createElement("button");
submitForm.innerText = "Submit Quiz";
quiz.appendChild(submitForm);