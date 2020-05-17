$(function(){

    var loading = $('#loadbar').hide();
    $(document)
    .ajaxStart(function () {
        loading.show();
    }).ajaxStop(function () {
    	loading.hide();
    });
    
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
        
        let currentQuestionIndex = 0;
        let q;
        function renderQuestion() {

            q = quizQuestions[currentQuestionIndex];
           
            let lastQuestionIndex = quizQuestions.length - 1;
            

            $('#questionTitle').text(q.question)

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
        console.log('u got clicked!!', $(this).attr('name'))
        q = quizQuestions[currentQuestionIndex];
        choices = $(".btn").map(function() {
            return $(this).attr("name");
            }).get();
        userChoice = 
        console.log("is this returning choices?", choices)
       
        correctAnswer = q.correctAnswer;
        console.log("is this correct answer?", correctAnswer)
       
        // for (let i = 0; i < choices.length; i++) {
            if ($(this).attr("name") != correctAnswer)
                // console.log("incorrect answer", correctAnswer)
                $("#answer").text("INCORRECT");
            else 
                // console.log("correct answer", correctAnswer)
                $("#answer").text("CORRECT");
        // }   console.log("what is this returning?", choices[i])
        //alert right or wrong (if/else)
        //incrment score or decrment timer
        // go to next question
        currentQuestionIndex++
        renderQuestion();

        // Timer function
        const questionTime = 10;
        const counterLimit = 100;

    
    });

    

    
});	
