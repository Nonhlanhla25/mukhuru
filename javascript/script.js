const quizData = [
    {
        question: "What is to budget",
        a: "Over spending on things you don,t need ,just to gain likes on social media.",
        b: "A spending plan that takes into account both current and future income and expences.",
        c: "The insurance company,that helps you save money on your car, home and business.",
        correct: "b",
    },
    {
        question: "What happens if you can't pay your credit??",
        a: "The bank will allow you to lend you more money",
        b: "Your credit rating will go up",
        c: "It will set you on the path to forclosure, which means losing your house",
        correct: "c",
    },
    {
        question: "Saving account and money market account are most appropriate for?",
        a: "Long-term invesments",
        b: "Emergency funds and short-term goals",
        c: "Earning a high rate of return",
        correct: "b",
    },
    {
        question: "On average, what percentage of your paycheck is put into saving account?",
        a: "0-5%",
        b: "6-10%",
        c: "over 20%",
        correct: "a",
    },
    {
        question: "What does Mukuru mean?",
        a: "money",
        b: "taking care of your family",
        c: "Elder",
        correct: "c",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly
           and have earned ${score} points that will be available on your Mukuru account</h2>

           <a href= "homepage.html"><button>HOME</button></a>
           `
       }
    }
})