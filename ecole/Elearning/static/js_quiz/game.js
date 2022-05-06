const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'Que signifie l’acronyme NSI ?',
        choice1: 'Sciences Numériques et Informatique',
        choice2: 'Sciences Numériques et Technologie',
        choice3: 'Numérique et Sciences Informatiques',
        choice4: 'Enseigner de l’Informatique au Lycée',
        answer: 3,
    },
    {
        question:
            "En quelle année a été créé la spécialté NSI ?",
        choice1: "2018",
        choice2: "2019",
        choice3: "2020",
        choice4: "2021",
        answer: 2,
    },
    {
        question: "Quelle est la durée hebdomadaire de la spécialté NSI en classe de première ?",
        choice1: "2 heures",
        choice2: "3 heures",
        choice3: "4 heures",
        choice4: "6 heures",
        answer: 3,
    },
    {
        question: "Quelle est la durée hebdomadaire de la spécialté NSI en classe de terminale ?",
        choice1: "2 heures",
        choice2: "3 heures",
        choice3: "4 heures",
        choice4: "6 heures",
        answer: 4,
    },
    {
        question: "Quel est le principal langage informatique utilisé en NSI ?",
        choice1: "C++",
        choice2: "Python",
        choice3: "Ruby",
        choice4: "PHP",
        answer: 2,
    },
    {
        question: "En classe de terminale, l'épreuve écrite de NSI dure ?",
        choice1: "3 heures",
        choice2: "3 heures 30",
        choice3: "4 heures",
        choice4: "4 heures 30",
        answer: 2,
    },
    {
        question: "En classe de terminale, l'épreuve pratique sur poste informatique dure ",
        choice1: "30 min",
        choice2: "45 min",
        choice3: "1 heure",
        choice4: "1 heure 15",
        answer: 3,
    },
    {
        question: "Lors l'épreuve écrite de NSI en classe de terminale, l'élève a le choix entre ?",
        choice1: "5 exercices lui sont sont proposés, il doit en faire 3 sur les 5",
        choice2: "5 exercices lui sont sont proposés, il doit en faire 3 sur les 4",
        choice3: "5 exercices lui sont sont proposés, il doit en faire 2 sur les 4",
        choice4: "Il n'a pas le choix, il doit faire les 3 exercices proposés",
        answer: 1,
    },
    {
        question: "Indiquer parmi les langages suivants, celui qui également au programme en terminale ?",
        choice1: "C++",
        choice2: "PHP",
        choice3: "JavaScript",
        choice4: "SQL",
        answer: 4,
    },
    {
        question: "Qui a décrit dans les années 40 la 1ère architecture des ordinateurs, encore valable aujourd’hui ?",
        choice1: "Alan Turinng",
        choice2: "Gordon Moore",
        choice3: "John Von Neumann",
        choice4: "Blaise Pascal",
        answer: 3,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 10

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return location.href="/end"
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()