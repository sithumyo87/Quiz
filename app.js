const quizData = [
    {
        question:"What year is the independence of Myanmar?",
        a:"1940",
        b:"1943",
        c:"1948",
        d:"1950",
        correct:"c",
    },{
        question:"Who is the president of Myanmar in 2020?",
        a:"U Win Myint",
        b:"Daw Aung San Su Kyi",
        c:"U Thein Sein",
        d:"U Htin Kyaw",
        correct:"a",
    },{
        question:"What place is the captial of Myanmar?",
        a:"Yangon",
        b:"Mandalay",
        c:"Naypyitaw",
        d:"Lashio",
        correct:"c",
    },{
        question:"What pagoda is the most popular in Myanmar?",
        a:"Bagan Pagoda",
        b:"Shwedagon Pagoda",
        c:"kuthodaw Pagoda",
        d:"Shwezigon Pagoda",
        correct:"b",
    },{
        question:"Who is the best actor in Myanmar?",
        a:"Paing Takhon",
        b:"Kyaw Hein",
        c:"Pyay Ti Oo",
        d:"Nay Toe",
        correct:"d",
    }
]
const queEl = document.getElementById("que");
const aEl = document.getElementById("atext");
const bEl = document.getElementById("btext");
const cEl = document.getElementById("ctext");
const dEl = document.getElementById("dtext");
const answerEls = document.querySelectorAll(".answer");
const submitBtn = document.getElementById("submit");
const quiz = document.getElementById("quiz");
let current = 0;
let score = 0;
loadQuiz();
function loadQuiz(){
    deselect();
    const quiz = quizData[current];
    aEl.innerText = quiz.a;
    bEl.innerText = quiz.b;
    cEl.innerText = quiz.c;
    dEl.innerText= quiz.d;
    queEl.innerText = quiz.question;
}
function deselect(){
    answerEls.forEach((answerEl) =>{
        answerEl.checked = false;
    })
}
function select(){
    
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    })
    return answer;
}

submitBtn.addEventListener("click",() =>{
    
    const answer = select();
    
    if(answer){
        
        if(answer === quizData[current].correct){
            score++;
        }
        current++;
        if(current < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `<h2>You get the score  ${ score}/${quizData.length}</h2><button onclick= location.reload()>Refersh</button>`
        }
        
    }
    
});