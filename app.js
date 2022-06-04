let questions = [
    {
        text: "Who created Facebook?",
        answers: {
            "Bill Gates": false,
            "Mark Zukerberg": true,
            "Jeff Bezos": false,
            "Daniel Sam": false
        }
    }, 
    {
        text: "Who is the richest man in the world?",
        answers: {
            "Bill Gates": false,
            "Mark Zukerberg": false,
            "Jeff Bezos": false,
            "Elon Musk": true
        }
    },
];

let quiz = document.querySelector("#quiz");

for (let i = 0; i < questions.length; i++) {
    let question = document.createElement("p");
    question.innerText = questions[i].text;
    quiz.appendChild(question);
    
}