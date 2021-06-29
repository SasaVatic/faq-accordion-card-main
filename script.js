const questions = document.querySelectorAll('.faq-question');
const answers = document.querySelectorAll('.faq-answer');
const arrowIcons = document.querySelectorAll('.question-arrow');

questions.forEach((question, index) => {
    question.addEventListener('click', function() {
        question.classList.toggle('active');
        answers[index].classList.toggle('active');
        arrowIcons[index].classList.toggle('active');

        for(let i = 0; i < questions.length; i++) {
            if(i != index) {
                questions[i].classList.remove('active');
                answers[i].classList.remove('active');
                arrowIcons[i].classList.remove('active');
            }
        }
    });
});