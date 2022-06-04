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
    let question = document.createElement("p");
    question.innerText = questions[i].text;
    quiz.appendChild(question);
    
}