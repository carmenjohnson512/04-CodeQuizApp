
$(document).ready(function codeQuiz(){

    // let header = $(".myHeader");
    // let sticky = header.offsetTop;

    // // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    // function stickyHeader() {
    //     if (window.pageYOffset > sticky) {
    //         header.classList.add(".sticky");
    //     } else {
    //         header.classList.remove(".sticky");
    //     }
    // }
    // window.onscroll = function() {stickyHeader()};


    //Questions Function
    let quizQuestions = [
        {
        question: "1. Which of these expressions is NOT a valid way to add 1 to a variable in JavaScript?",
        answers: { 
            a: "x++",
            b: "x + 1",
            c: "x += 1",
            d: "x+"
            },
        correctAnswer: "d",  
        },
        {
        question: "2. What does JavaScript return to you if you try to access an object's property that doesn't exist?",
        answers: {
            a: "Null",
            b: "NaN",
            c: "Undefined",
            d: "0"
            },
        correctAnswer: "c",     
        },
        {
        question: "3. To focus on the logic and make refinements to a program before translating it into a programming language, a programmer often creates an outline of the program’s algorithm. What is the term for this type of outline?",
        answers: {
            a: "Pseudocode",
            b: "Compiler",
            c: "Sketch",
            d: "Mock-up",
            },
        correctAnswer: "a",     
        },
        {
        question: "4. Katherine is creating a computer program that will allow the cursor to jump to a different location when the mouse is clicked on a certain image. Which programming component should Katherine use to tell the program what to do when the mouse is clicked on the image?",
        answers: {
            a: "A parameter",
            b: "An event",
            c: "A class",
            d: "An event handler",
            },
        correctAnswer: "d",     
        },
        {
        question: "5. Which term is used to describe expressions that result in the value of either true or false?",
        answers: {
            a: "Variable",
            b: "Conditional",
            c: "Boolean",
            d: "Concatenation",
            },
        correctAnswer: "c",     
        },
        {
        question: "6. What does HTML stand for?",
        answers: {
            a: "Human Text Markup Language",
            b: "Hyper Text Markup Language",
            c: "Hyper Total Management Language",
            d: "Handy Text Markup Language",
            },
        correctAnswer: "b",     
        },
        {
        question: "7. What does CSS stand for?",
        answers: {
            a: "Cascading Style Sheets",
            b: "Computer Space Storage",
            c: "Central Storage System",
            d: "Computer Storage System",
            },
        correctAnswer: "a",     
        },
        {
        question: "8. What is the process of finding and fixing errors in the code syntax so the computer program will run properly?",
        answers: {
            a: "Coding",
            b: "Debugging",
            c: "Sequencing",
            d: "Commanding",
            },
        correctAnswer: "b",     
        },
        {
        question: "9. A ____ is a mini-program with several lines that can be called on whenever needed.",
        answers: {
            a: "Code",
            b: "Bug",
            c: "Function",
            d: "Loop",
            },
        correctAnswer: "c",     
        },
        {
        question: "10. What does a loop do to a section of code?",
        answers: {
            a: "Deletes it",
            b: "Reverses it",
            c: "Filters it",
            d: "Repeats it",
        correctAnswer: "d",     
        }
        }];

    let answers = [];
    let score = 0;
    let highscore = localStorage.getItem("highscore");
    let currentQuestionIndex = 0;
    let q;

    function renderQuestion() {
        q = quizQuestions[currentQuestionIndex];            

        $("#questionTitle").text(q.question)

        for (const key in q.answers) {
            //console.log('this is the key!!', key)
            //console.log('each answer!!!', q.answers[key])
            $('#' + key).text( "    " +q.answers[key])
        };
    };
    renderQuestion()
    
    let choices;
    let correctAnswer = [];

    $(".btn").on('click',function () {
        q = quizQuestions[currentQuestionIndex];
        choices = $(".btn").map(function() {
            return $(this).attr("name");
            }).get();
    
        correctAnswer = q.correctAnswer;
    
        if ($(this).attr("name") != correctAnswer) {
            $("#answer").text("INCORRECT");
            $(".countdown").html((timer2.seconds--) * 20);
        } else {
            $("#answer").text("CORRECT");
            $(".score").html(((score++) + 1) * 10);    
        } if ($(timer2) == 0 || currentQuestionIndex == 9) {
            correctAnswer;
            console.log("is this showing the correct answer to #10?", correctAnswer)
            clearInterval(interval);
            currentQuestionIndex = -1;
            // console.log(timer2)
            setTimeout( function () {
                alert ("Game Over!");
                prompt ("Your score is " + (score * 10) + "! Enter your initials below");
            }, 1000);

        };
    
        currentQuestionIndex++
        setTimeout( function () {
            renderQuestion()
            $($("#answer").empty());
        }, 3000);   
        
    });

    // timer function
    let timer2 = "5:00";
    let interval = setInterval(function() {
    
        let timer = timer2.split(':');
        //by parsing integer, I avoid all extra string processing
        let minutes = parseInt(timer[0], 10);
        let seconds = parseInt(timer[1], 10);
        --seconds;
        minutes = (seconds < 0) ? --minutes : minutes;
        if (minutes < 0) clearInterval(interval);
        seconds = (seconds < 0) ? 59 : seconds;
        seconds = (seconds < 10) ? '0' + seconds : seconds;
        $('.countdown').html(minutes + ':' + seconds);
        timer2 = minutes + ':' + seconds;
    }, 1000);
      
    // let highscore = localStorage.getItem("highscore");

    // if(highscore !== null){
    //     if (score > highscore) {
    //         localStorage.setItem("highscore", score);      
    //     }
    
    //     else {
    //         localStorage.setItem("highscore", score);
    //     }
    // };
});	
