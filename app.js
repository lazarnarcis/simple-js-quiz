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
        answer.name = "question" + i; // ex: question4
        answer.value = y;
        let answerText = document.createElement("label");
        answerText.innerText = questions[i].answers[y];
        questionDiv.appendChild(answer);
        questionDiv.appendChild(answerText);
    }
    quiz.appendChild(questionDiv);
}

let submitForm = document.createElement("button");
submitForm.innerText = "Submit Quiz";
submitForm.addEventListener("click", getData);
quiz.appendChild(submitForm);

function getData () {
    let correctAnswer = 0;
    for (let p = 0; p < questions.length; p++) {
        let radios = document.getElementsByName('question' + p);
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                let radVal = radios[i].value;
                let valFromQuestion = questions[p].correctAnswer;
                if (valFromQuestion == radVal) {
                    correctAnswer++;
                }
                break;
            }
        }
    }
    if (correctAnswer == questions.length) {
        console.log("correct");
    }
}