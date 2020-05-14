$(function(){

    var loading = $('#loadbar').hide();
    $(document)
    .ajaxStart(function () {
        loading.show();
    }).ajaxStop(function () {
    	loading.hide();
    });
    
    //Questions Function

    $(function renderQuestion(){
        let quizQuestions = [
            {
            question: "1. Which of these expressions is NOT a valid way to add 1 to a variable in JavaScript?",
            answers: { 
                a: "x++",
                b: "x = x + 1",
                c: "x += 1",
                d: "x+"
                },
            correctAnswer: "D",  
            },
            {
            question: "2. What does JavaScript return to you if you try to access an object's property that doesn't exist?",
            answers: {
                a: "Null",
                b: "NaN",
                c: "Undefined",
                d: "0"
                },
            correctAnswer: "C",     
            },
            {
            question: "3. To focus on the logic and make refinements to a program before translating it into a programming language, a programmer often creates an outline of the program’s algorithm. What is the term for this type of outline?",
            answers: {
                a: "Pseudocode",
                b: "Compiler",
                c: "Sketch",
                d: "Mock-up",
                },
            correctAnswer: "A",     
            },
            {
            question: "4. Katherine is creating a computer program that will allow the cursor to jump to a different location when the mouse is clicked on a certain image. Which programming component should Katherine use to tell the program what to do when the mouse is clicked on the image?",
            answers: {
                a: "A parameter",
                b: "An event",
                c: "A class",
                d: "An event handler",
                },
            correctAnswer: "D",     
            },
            {
            question: "5. Which term is used to describe expressions that result in the value of either true or false?",
            answers: {
                a: "Variable",
                b: "Conditional",
                c: "Boolean",
                d: "Concatenation",
                },
            correctAnswer: "C",     
            },
            {
            question: "6. What does HTML stand for?",
            answers: {
                a: "Human Text Markup Language",
                b: "Hyper Text Markup Language",
                c: "Hyper Total Management Language",
                d: "Handy Text Markup Language",
                },
            correctAnswer: "B",     
            },
            {
            question: "7. What does CSS stand for?",
            answers: {
                a: "Cascading Style Sheets",
                b: "Computer Space Storage",
                c: "Central Storage System",
                d: "Computer Storage System",
                },
            correctAnswer: "A",     
            },
            {
            question: "8. What is the process of finding and fixing errors in the code syntax so the computer program will run properly?",
            answers: {
                a: "Coding",
                b: "Debugging",
                c: "Sequencing",
                d: "Commanding",
                },
            correctAnswer: "B",     
            },
            {
            question: "9. A ____ is a mini-program with several lines that can be called on whenever needed.",
            answers: {
                a: "Code",
                b: "Bug",
                c: "Function",
                d: "Loop",
                },
            correctAnswer: "C",     
            },
            {
            question: "10. What does a loop do to a section of code?",
            answers: {
                a: "Deletes it",
                b: "Reverses it",
                c: "Filters it",
                d: "Repeats it",
            correctAnswer: "D",     
            },
        }];

        let answers = [];
        
        let q = quizQuestions[currentQuestionIndex];

        let lastQuestionIndex = quizQuestions.length - 1;
        
        let currentQuestionIndex = 0;
        // got this from sitepoint.com -- need to flush this out (not sure what's going on or where to go)
        quizQuestions.forEach(currentQuestion, questionNumber) {
            for(letter in currentQuestion.answers) {
                answers.push("<label><input type="radio" name="question${questionNumber}" value="${letter}">${letter}:
                    ${currentQuestion.answers[letter]}
                  </label>"");
    
            }

        }
        
        
        $('.question-modal-header').html($("<h3>" + q[question] + "</h3>"));
            $(".choiceA").text($(q).attr({"#choiceA": ));
            $(".choiceB").text($(q).attr("choiceB"));
            $(".choiceC").text($(q).attr("choiceC"));
            $(".choiceD").text($(q).attr("choiceD"));
            // choiceB.innerHTML = q.choiceB;
            // choiceC.innerHTML = q.choiceC;
            // choiceD.innerHTML = q.choiceD;
    }
    renderQuestion();

    $("label.btn").on('click',function () {
    	let userChoice = $(this).find('input:choice').val();
    	$('#loadbar').show();
    	$('#quiz').fadeOut();
    	setTimeout(function(){
           $( "#answer" ).html(  $(this).checking(userChoice) );      
            $('#quiz').show();
            $('#loadbar').fadeOut();
           /* something else */
    	}, 1000);
    });

    $ans = 3;

    $.fn.checking = function(ck) {
        if (ck != $ans)
            return 'INCORRECT';
        else 
            return 'CORRECT';
    }; 
});	
