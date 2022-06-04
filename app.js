let questions = ["Who created Facebook?", "Who is the richest man in the world?"];

let responsesQ1 = {
    "Bill Gates": false,
    "Mark Zukerberg": true,
    "Jeff Bezos": false,
    "Daniel Sam": false
};

let responsesQ2 = {
    "Bill Gates": false,
    "Mark Zukerberg": false,
    "Jeff Bezos": false,
    "Elon Musk": true
};

let quiz = document.querySelector("#quiz");

for (let i = 0; i < questions.length; i++) {
    let question = document.createElement("p");
    question.innerText = questions[i];
    quiz.appendChild(question);
}